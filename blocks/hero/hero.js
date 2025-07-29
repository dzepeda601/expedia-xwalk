export default function decorate(block) {
  const textColor = block.dataset.textColor;
  if (textColor) {
    block.classList.add(textColor);
  }

  // Inject CTA button if data-cta-text is present
  const ctaText = block.dataset.ctaText;
  const ctaUrl = block.dataset.ctaUrl || '#';

  if (ctaText) {
    const cta = document.createElement('a');
    cta.href = ctaUrl;
    cta.className = 'cta-button';
    cta.textContent = ctaText;
    block.appendChild(cta);
  }
}
