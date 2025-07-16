export default function decorate(block) {
  const textColor = block.dataset.textColor;
  if (textColor) {
    block.classList.add(textColor);
  }
}

