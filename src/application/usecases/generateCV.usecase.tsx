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

  // 4. Ambil element template dan capture sebagai JPEG.
  const element = tempContainer.querySelector('#cv-template') as HTMLElement;
  if (!element) throw new Error('Template not found');

  // Pastikan src img sudah ter-set di DOM level (workaround html-to-image).
  if (photoSrc) {
    const imgEl = element.querySelector('img') as HTMLImageElement | null;
    if (imgEl) {
      imgEl.src = photoSrc;
      await new Promise<void>((resolve) => {
        if (imgEl.complete && imgEl.naturalWidth > 0) {
          resolve();
        } else {
          imgEl.onload = () => resolve();
          imgEl.onerror = () => resolve();
        }
      });
    }
  }

  await document.fonts.ready;

  const pixelRatio = 1.35;

  // Workaround Safari: render pertama sering kosong, render dua kali untuk fix.
  await toJpeg(element, { quality: 0.1, pixelRatio: 1 });
  const imgData = await toJpeg(element, {
    quality: 0.92,
    pixelRatio,
    fetchRequestInit: { cache: 'force-cache' },
  });

  const elemWidth = element.offsetWidth;
  const elemHeight = element.offsetHeight;

  // 5. Buat PDF dan simpan.
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (elemHeight * pdfWidth) / elemWidth;

  pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(`CV_${heroData.name.replace(/\s+/g, '_')}.pdf`);

  // 6. Cleanup DOM.
  root.unmount();
  document.body.removeChild(tempContainer);
};
