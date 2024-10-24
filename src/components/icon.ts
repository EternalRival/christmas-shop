import ICON_URL from '~/assets/images/icons.svg';

const NS = 'http://www.w3.org/2000/svg';

export default function Icon({ name, className }: { name: string; className?: string }) {
  const svg = document.createElementNS(NS, 'svg');
  const use = document.createElementNS(NS, 'use');

  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');

  if (className) {
    svg.setAttribute('class', className);
  }

  use.setAttribute('href', `${ICON_URL}#${name}`);

  svg.append(use);

  return svg;
}
