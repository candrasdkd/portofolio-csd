import jsPDF from 'jspdf';
import { Project } from '@/types';

// ─── helpers ────────────────────────────────────────────────────────────────

const loadImageAsDataURL = (src: string): Promise<string> =>
  new Promise((resolve) => {
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

// Colors
const COLORS = {
  primary: [139, 92, 246] as [number, number, number],      // Violet 500
  primaryLight: [237, 233, 254] as [number, number, number], // Violet 100
  dark: [15, 23, 42] as [number, number, number],            // Slate 900
  textMain: [31, 41, 55] as [number, number, number],        // Gray 800
  textMuted: [75, 85, 99] as [number, number, number],       // Gray 600
  border: [229, 231, 235] as [number, number, number],       // Gray 200
  white: [255, 255, 255] as [number, number, number],
};

// ─── main export ────────────────────────────────────────────────────────────

export const generateAllProjectsPDF = async (projects: Project[]): Promise<void> => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentW = pageW - margin * 2;

  // ══════════════════════════════════════════════════
  // COVER PAGE (Modern Centered)
  // ══════════════════════════════════════════════════
  doc.setFillColor(...COLORS.dark);
  doc.rect(0, 0, pageW, pageH, 'F');

  // Top/Bottom Accent Bars
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, pageW, 6, 'F');
  doc.rect(0, pageH - 6, pageW, 6, 'F');

  const centerY = pageH / 2;

  // Portfolio Label
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(167, 139, 250); // Violet 400
  const labelText = 'PROJECT PORTFOLIO';
  doc.text(labelText, pageW / 2, centerY - 30, { align: 'center', charSpace: 2 });

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.setTextColor(...COLORS.white);
  doc.text('Candra Sidik Dermawan', pageW / 2, centerY - 12, { align: 'center' });

  // Divider
  doc.setDrawColor(...COLORS.primary);
  doc.setLineWidth(1);
  doc.line(pageW / 2 - 20, centerY - 2, pageW / 2 + 20, centerY - 2);

  // Role
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(16);
  doc.setTextColor(209, 213, 219); // Gray 300
  doc.text('Frontend & Mobile Developer', pageW / 2, centerY + 10, { align: 'center' });

  // Count & Date
  doc.setFontSize(10);
  doc.setTextColor(156, 163, 175); // Gray 400
  doc.text(`${projects.length} Selected Projects  ·  ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`, pageW / 2, centerY + 24, { align: 'center' });

  // Contacts (Bottom Centered)
  doc.setFontSize(10);
  doc.setTextColor(167, 139, 250); // Violet 400
  const githubText = 'github.com/candrasdkd';
  const linkedinText = 'linkedin.com/in/candrasdk';
  const separator = '   |   ';

  // Calculate total width to center properly with links
  const gW = doc.getTextWidth(githubText);
  const sepW = doc.getTextWidth(separator);
  const lW = doc.getTextWidth(linkedinText);
  const totalW = gW + sepW + lW;

  let startX = (pageW - totalW) / 2;

  doc.textWithLink(githubText, startX, pageH - 24, { url: 'https://github.com/candrasdkd' });
  doc.setTextColor(156, 163, 175);
  doc.text(separator, startX + gW, pageH - 24);
  doc.setTextColor(167, 139, 250);
  doc.textWithLink(linkedinText, startX + gW + sepW, pageH - 24, { url: 'https://www.linkedin.com/in/candrasdk/' });

  // ══════════════════════════════════════════════════
  // TABLE OF CONTENTS
  // ══════════════════════════════════════════════════
  doc.addPage();

  // ToC Header
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.rect(0, 0, pageW, 40, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...COLORS.dark);
  doc.text('Table of Contents', margin, 26);

  doc.setDrawColor(...COLORS.primary);
  doc.setLineWidth(1.5);
  doc.line(margin, 32, margin + 20, 32);

  let tocY = 55;
  projects.forEach((project, index) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...COLORS.textMain);

    const numStr = String(index + 1).padStart(2, '0');
    doc.text(`${numStr}.`, margin, tocY);
    doc.text(project.title, margin + 12, tocY);

    // Dotted guide line
    doc.setDrawColor(229, 231, 235);
    doc.setLineDashPattern([1, 2], 0);
    const titleWidth = doc.getTextWidth(project.title);
    doc.line(margin + 16 + titleWidth, tocY - 1, pageW - margin, tocY - 1);
    doc.setLineDashPattern([], 0); // reset

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.textMuted);
    doc.text(`${project.category}   ·   ${project.type}`, margin + 12, tocY + 6);

    tocY += 16;

    // pagination check
    tocY = ensureSpace(doc, tocY, 20, pageH, margin);
  });

  // ══════════════════════════════════════════════════
  // PROJECT PAGES
  // ══════════════════════════════════════════════════
  for (const project of projects) {
    doc.addPage();
    let y = 0;

    // Stylish Header
    // background primary
    doc.setFillColor(...COLORS.primary);
    doc.rect(0, 0, pageW, 60, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(...COLORS.white);

    // Auto scale title if too long
    let titleFontSize = 26;
    while (doc.getTextWidth(project.title) > contentW && titleFontSize > 14) {
      titleFontSize -= 2;
      doc.setFontSize(titleFontSize);
    }
    doc.text(project.title, margin, 32);

    // Badges inside header
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    const badgeY = 42;

    // Category Badge
    doc.setFillColor(255, 255, 255); // White pill
    const catW = doc.getTextWidth(project.category) + 10;
    doc.roundedRect(margin, badgeY, catW, 8, 4, 4, 'F');
    doc.setTextColor(...COLORS.primary);
    doc.text(project.category, margin + 5, badgeY + 5.5);

    // Type Badge
    doc.setFillColor(237, 233, 254); // Light violet
    const typeX = margin + catW + 4;
    const typeW = doc.getTextWidth(project.type) + 10;
    doc.roundedRect(typeX, badgeY, typeW, 8, 4, 4, 'F');
    doc.setTextColor(...COLORS.primary);
    doc.text(project.type, typeX + 5, badgeY + 5.5);

    y = 75;

    // ── Overview ──
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.textMain);
    doc.text('Overview', margin, y);
    y += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(...COLORS.textMuted);

    // Nice paragraph spacing
    // jsPDF splitTextToSize doesn't add leading, we do it manually.
    const descLines = doc.splitTextToSize(project.fullDescription, contentW);
    const lineHeight = 6;

    y = ensureSpace(doc, y, descLines.length * lineHeight + 4, pageH, margin);
    descLines.forEach((line: string) => {
      doc.text(line, margin, y);
      y += lineHeight;
    });

    y += 8;

    // ── Technologies ──
    y = ensureSpace(doc, y, 30, pageH, margin);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.textMain);
    doc.text('Technologies', margin, y);
    y += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    let techX = margin;
    let currentY = y;

    project.technologies.forEach((tech) => {
      const tw = doc.getTextWidth(tech) + 8;
      if (techX + tw > pageW - margin) {
        techX = margin;
        currentY += 10;
        currentY = ensureSpace(doc, currentY, 10, pageH, margin);
      }
      // Fill gray-100, border gray-200
      doc.setFillColor(243, 244, 246);
      doc.setDrawColor(229, 231, 235);
      doc.setLineWidth(0.3);
      doc.roundedRect(techX, currentY - 5, tw, 7, 3.5, 3.5, 'FD');

      doc.setTextColor(55, 65, 81); // gray-700
      doc.text(tech, techX + 4, currentY);
      techX += tw + 3;
    });
    y = currentY + 16;

    // ── Links ──
    const links: { label: string; url: string }[] = [];
    if (project.demoUrl) links.push({ label: 'Live Website', url: project.demoUrl });
    if (project.playStoreUrl) links.push({ label: 'Google Play Store', url: project.playStoreUrl });
    if (project.appStoreUrl) links.push({ label: 'App Store', url: project.appStoreUrl });
    if (project.repoUrl) links.push({ label: 'GitHub Repository', url: project.repoUrl });

    if (links.length > 0) {
      y = ensureSpace(doc, y, 20 + links.length * 8, pageH, margin);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...COLORS.textMain);
      doc.text('Resources', margin, y);
      y += 8;

      doc.setFontSize(10);
      links.forEach(({ label, url }) => {
        // Draw a light blue bullet
        doc.setFillColor(167, 139, 250);
        doc.circle(margin + 2, y - 1, 1.5, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...COLORS.textMain);
        doc.text(`${label}: `, margin + 6, y);

        const labelW = doc.getTextWidth(`${label}: `);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...COLORS.primary);
        doc.textWithLink(url, margin + 6 + labelW, y, { url });

        y += 8;
      });
      y += 8;
    }

    // ── Screenshots ──
    if (project.images.length > 0) {
      y = ensureSpace(doc, y, 20, pageH, margin);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...COLORS.textMain);
      doc.text('Gallery', margin, y);
      y += 8;

      const columns = project.type === 'Mobile' ? 3 : 1;
      const spacingX = 6;
      const spacingY = 12;
      const gridImgW = columns === 1 ? contentW : (contentW - spacingX * (columns - 1)) / columns;

      let col = 0;
      let startY = y;
      let maxRowH = 0;

      for (let i = 0; i < project.images.length; i++) {
        const src = project.images[i];
        const dataUrl = await loadImageAsDataURL(src);
        if (!dataUrl) continue;

        const tmpImg = new Image();
        tmpImg.src = dataUrl;
        await new Promise<void>((r) => { tmpImg.onload = () => r(); tmpImg.onerror = () => r(); });

        const ratio = tmpImg.naturalHeight / tmpImg.naturalWidth;
        // Enforce max width, but keep standard aspect ratio
        const actualImgW = gridImgW;
        const imgH = actualImgW * ratio;

        if (col === 0) {
          startY = ensureSpace(doc, startY, imgH + spacingY, pageH, margin);
          maxRowH = 0;
        }

        const currentX = margin + col * (actualImgW + spacingX);

        // Image shadow/border effect
        doc.setFillColor(243, 244, 246);
        doc.roundedRect(currentX - 2, startY - 2, actualImgW + 4, imgH + 4, 3, 3, 'F');
        doc.setDrawColor(229, 231, 235);
        doc.setLineWidth(0.5);

        try {
          doc.addImage(dataUrl, 'JPEG', currentX, startY, actualImgW, imgH, undefined, 'FAST');
          doc.roundedRect(currentX, startY, actualImgW, imgH, 2, 2, 'S'); // Outline stroke
        } catch {
          // ignore
        }

        maxRowH = Math.max(maxRowH, imgH);
        col++;

        if (col >= columns || i === project.images.length - 1) {
          startY += maxRowH + spacingY;
          col = 0;
          y = startY; // keep global `y` updated for text or pagination
        }
      }
    }
  }

  // ══════════════════════════════════════════════════
  // PAGE NUMBERS (footer on every page)
  // ══════════════════════════════════════════════════
  const totalPages = (doc.internal as { getNumberOfPages: () => number }).getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    // Dynamic text color depending on page background. 
    // Page 1 is dark cover, so white text. Rest is white, so gray text.
    if (i === 1) {
      doc.setTextColor(156, 163, 175); // Gray 400
    } else {
      doc.setTextColor(156, 163, 175); // Gray 400
      // Draw a subtle line above footer on content pages
      doc.setDrawColor(243, 244, 246);
      doc.setLineWidth(0.5);
      doc.line(margin, pageH - 12, pageW - margin, pageH - 12);
    }

    doc.text(
      `Candra Sidik Dermawan  |  Portfolio`,
      margin,
      pageH - 7,
      { align: 'left' }
    );
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageW - margin,
      pageH - 7,
      { align: 'right' }
    );
  }

  const dateStr = new Date().toISOString().slice(0, 10);
  doc.save(`CandraSD_Portfolio_${dateStr}.pdf`);
};
