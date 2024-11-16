import type Icon from '~/assets/icons';
import ICON_URL from '~/assets/icons/icons-sprite.svg';

const NS = 'http://www.w3.org/2000/svg';

export default function SVGIcon({ name, className }: { name: Icon; className?: string }) {
  const svg = document.createElementNS(NS, 'svg');
  const use = document.createElementNS(NS, 'use');
  const url = new URL(ICON_URL);

  url.hash = name;

  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');

  if (className) {
    svg.setAttribute('class', className);
  }

  use.setAttribute('href', url.toString());

  svg.append(use);

  return svg;
}
