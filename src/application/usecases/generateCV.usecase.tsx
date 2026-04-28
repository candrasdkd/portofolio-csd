// application/usecases/generateCV.usecase.ts
// Use-case: generate CV PDF dari CVTemplate component.
// Memindahkan seluruh business logic dari Hero.tsx.

import { HeroData } from '@/domain/entities';

export const generateCVUseCase = async (heroData: HeroData): Promise<void> => {
  // 1. Buat temporary container di luar viewport untuk rendering off-screen.
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-10000px';
  tempContainer.style.top = '0px';
  tempContainer.style.width = '210mm'; // A4 width
  tempContainer.style.backgroundColor = 'white';
  document.body.appendChild(tempContainer);

  // Dynamically import heavy libraries hanya saat dibutuhkan.
  const [
    { toJpeg },
    { default: jsPDF },
    { createRoot },
    { default: CVTemplate },
  ] = await Promise.all([
    import('html-to-image'),
    import('jspdf'),
    import('react-dom/client'),
    import('@/presentation/components/CVTemplate'),
  ]);

  // 2. Konversi foto profil ke base64 agar html-to-image bisa embed dengan benar.
  let photoSrc: string | undefined;
  try {
    photoSrc = await new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = () => reject(new Error('Image failed to load'));
      img.src = '/assets/me.jpg';
    });
  } catch {
    console.warn('Could not load profile photo for CV');
  }

  // 3. Render CVTemplate ke dalam temporary container dan tunggu selesai.
  const root = createRoot(tempContainer);
  await new Promise<void>((resolve) => {
    root.render(<CVTemplate photoSrc={photoSrc} />);
    // Tunggu 1.5 detik agar font dan DOM layout selesai.
    setTimeout(resolve, 1500);
  });

  // 4. Ambil element template.
  const element = tempContainer.querySelector('#cv-template') as HTMLElement;
  if (!element) throw new Error('Template not found');

  await document.fonts.ready;

  // 5. Buat PDF menggunakan pdf.html agar text-selectable dan auto-paging rapi.
  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  // Gunakan callback pdf.html untuk handling multi-page yang lebih smart.
  await pdf.html(element, {
    callback: (doc) => {
      doc.save(`CV_${heroData.name.replace(/\s+/g, '_')}.pdf`);
    },
    x: 0,
    y: 0,
    width: 210, // A4 width dalam mm
    windowWidth: 850, // Sesuaikan dengan lebar element di DOM (210mm ~ 800-900px)
    autoPaging: 'text', // Menghindari potong teks di tengah baris
    margin: [5, 0, 10, 0], // Margin [top, left, bottom, right] dalam mm
  });

  // 6. Cleanup DOM (tunggu proses render selesai).
  setTimeout(() => {
    root.unmount();
    document.body.removeChild(tempContainer);
  }, 3000);
};
