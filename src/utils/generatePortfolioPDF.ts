import jsPDF from 'jspdf';
import { Project } from '@/types';

// ─── helpers ────────────────────────────────────────────────────────────────

const loadImageAsDataURL = (src: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.onerror = () => resolve(''); // skip silently
    img.src = src;
  });

const ensureSpace = (doc: jsPDF, y: number, needed: number, pageH: number, margin: number) => {
  if (y + needed > pageH - margin) {
    doc.addPage();
    return margin;
  }
  return y;
};

// ─── main export ────────────────────────────────────────────────────────────

export const generateAllProjectsPDF = async (projects: Project[]): Promise<void> => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentW = pageW - margin * 2;

  // ══════════════════════════════════════════════════
  // COVER PAGE
  // ══════════════════════════════════════════════════
  doc.setFillColor(10, 10, 20);
  doc.rect(0, 0, pageW, pageH, 'F');

  // Accent bar
  doc.setFillColor(99, 102, 241);
  doc.rect(0, 0, 6, pageH, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(255, 255, 255);
  doc.text('Candra Sidik Dermawan', margin + 8, pageH / 2 - 28);

  // Role
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(165, 180, 252);
  doc.text('Frontend & Mobile Developer', margin + 8, pageH / 2 - 16);

  // Divider
  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(0.5);
  doc.line(margin + 8, pageH / 2 - 10, pageW - margin, pageH / 2 - 10);

  // Portfolio label
  doc.setFontSize(11);
  doc.setTextColor(209, 213, 219);
  doc.text('Project Portfolio', margin + 8, pageH / 2 - 2);

  // Project count
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  doc.text(`${projects.length} Projects  ·  ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`, margin + 8, pageH / 2 + 6);

  // Contacts
  doc.setFontSize(9);
  doc.setTextColor(165, 180, 252);
  doc.textWithLink('github.com/candrasdkd', margin + 8, pageH - 24, { url: 'https://github.com/candrasdkd' });
  doc.text('  |  ', margin + 8 + doc.getTextWidth('github.com/candrasdkd'), pageH - 24);
  doc.textWithLink('linkedin.com/in/candrasdk', margin + 8 + doc.getTextWidth('github.com/candrasdkd  |  '), pageH - 24, { url: 'https://www.linkedin.com/in/candrasdk/' });

  // ══════════════════════════════════════════════════
  // TABLE OF CONTENTS
  // ══════════════════════════════════════════════════
  doc.addPage();
  doc.setFillColor(10, 10, 20);
  doc.rect(0, 0, pageW, 36, 'F');
  doc.setFillColor(99, 102, 241);
  doc.rect(0, 0, 6, 36, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('Table of Contents', margin + 8, 24);

  let tocY = 50;
  projects.forEach((project, index) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 45);
    doc.text(`${String(index + 1).padStart(2, '0')}.  ${project.title}`, margin, tocY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text(`${project.category}  ·  ${project.type}`, margin + 10, tocY + 5);

    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.2);
    doc.line(margin, tocY + 9, pageW - margin, tocY + 9);

    tocY += 14;
  });

  // ══════════════════════════════════════════════════
  // PROJECT PAGES
  // ══════════════════════════════════════════════════
  for (const project of projects) {
    doc.addPage();
    let y = 0;

    // Header bar
    doc.setFillColor(10, 10, 20);
    doc.rect(0, 0, pageW, 44, 'F');
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, 6, 44, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text(project.title, margin + 8, 20);

    // Badges
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const badgeY = 27;
    doc.setFillColor(99, 102, 241);
    const catW = doc.getTextWidth(project.category) + 8;
    doc.roundedRect(margin + 8, badgeY, catW, 6.5, 1.5, 1.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(project.category, margin + 12, badgeY + 4.5);

    doc.setFillColor(55, 65, 81);
    const typeX = margin + 8 + catW + 3;
    const typeW = doc.getTextWidth(project.type) + 8;
    doc.roundedRect(typeX, badgeY, typeW, 6.5, 1.5, 1.5, 'F');
    doc.text(project.type, typeX + 4, badgeY + 4.5);

    y = 54;

    // ── Overview ──
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 30, 45);
    doc.text('Project Overview', margin, y);
    y += 4;
    doc.setDrawColor(99, 102, 241);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentW, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(55, 65, 81);
    const descLines = doc.splitTextToSize(project.fullDescription, contentW);
    y = ensureSpace(doc, y, descLines.length * 4.5 + 4, pageH, margin);
    doc.text(descLines, margin, y);
    y += descLines.length * 4.5 + 8;

    // ── Technologies ──
    y = ensureSpace(doc, y, 24, pageH, margin);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 30, 45);
    doc.text('Technologies', margin, y);
    y += 4;
    doc.setDrawColor(99, 102, 241);
    doc.line(margin, y, margin + contentW, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    let techX = margin;
    project.technologies.forEach((tech) => {
      const tw = doc.getTextWidth(tech) + 7;
      if (techX + tw > pageW - margin) { techX = margin; y += 9; }
      doc.setFillColor(238, 242, 255);
      doc.setDrawColor(199, 210, 254);
      doc.roundedRect(techX, y - 4.5, tw, 6.5, 1.5, 1.5, 'FD');
      doc.setTextColor(67, 56, 202);
      doc.text(tech, techX + 3.5, y);
      techX += tw + 2.5;
    });
    y += 12;

    // ── Links ──
    const links: { label: string; url: string }[] = [];
    if (project.demoUrl) links.push({ label: 'Live Website', url: project.demoUrl });
    if (project.playStoreUrl) links.push({ label: 'Google Play Store', url: project.playStoreUrl });
    if (project.appStoreUrl) links.push({ label: 'App Store', url: project.appStoreUrl });
    if (project.repoUrl) links.push({ label: 'GitHub Repository', url: project.repoUrl });

    if (links.length > 0) {
      y = ensureSpace(doc, y, 20 + links.length * 6, pageH, margin);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 30, 45);
      doc.text('Links', margin, y);
      y += 4;
      doc.setDrawColor(99, 102, 241);
      doc.line(margin, y, margin + contentW, y);
      y += 6;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      links.forEach(({ label, url }) => {
        doc.setTextColor(99, 102, 241);
        doc.textWithLink(`• ${label}: ${url}`, margin, y, { url });
        y += 5.5;
      });
      y += 5;
    }

    // ── Screenshots ──
    if (project.images.length > 0) {
      y = ensureSpace(doc, y, 20, pageH, margin);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 30, 45);
      doc.text('Screenshots', margin, y);
      y += 4;
      doc.setDrawColor(99, 102, 241);
      doc.line(margin, y, margin + contentW, y);
      y += 8;

      for (const src of project.images) {
        const dataUrl = await loadImageAsDataURL(src);
        if (!dataUrl) continue;

        const tmpImg = new Image();
        tmpImg.src = dataUrl;
        await new Promise<void>((r) => { tmpImg.onload = () => r(); tmpImg.onerror = () => r(); });

        const ratio = tmpImg.naturalHeight / tmpImg.naturalWidth;
        const imgW = contentW;
        const imgH = imgW * ratio;

        y = ensureSpace(doc, y, imgH + 6, pageH, margin);
        doc.addImage(dataUrl, 'JPEG', margin, y, imgW, imgH);
        y += imgH + 6;
      }
    }
  }

  // ══════════════════════════════════════════════════
  // PAGE NUMBERS (footer on every page)
  // ══════════════════════════════════════════════════
  const totalPages = (doc.internal as { getNumberOfPages: () => number }).getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(7.5);
    doc.setTextColor(160, 160, 180);
    doc.text(
      `Portfolio — Candra Sidik Dermawan   |   Page ${i} of ${totalPages}`,
      pageW / 2,
      pageH - 7,
      { align: 'center' }
    );
  }

  const dateStr = new Date().toISOString().slice(0, 10);
  doc.save(`CandraSD_Portfolio_${dateStr}.pdf`);
};
