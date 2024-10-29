import clsx from 'clsx';
import { div, h1, p, section } from '~/utils/create-element';
import ExploreButton from './explore-button';
import styles from './hero-section.module.css';

const CAPTION_TEXT_1 = 'Merry Christmas';
const HEADING_TEXT = 'Gift yourself the magic of new possibilities';
const CAPTION_TEXT_2 = 'and Happy New Year';

export default function HeroSection() {
  return section({ className: styles['hero-section'] }, [
    div({ className: styles['container'] }, [
      p({ className: 'text-caption', textContent: CAPTION_TEXT_1 }),
      h1({ className: clsx(styles['heading'], 'text-header-1'), textContent: HEADING_TEXT }),
      ExploreButton(),
      p({ className: 'text-caption', textContent: CAPTION_TEXT_2 }),
    ]),
  ]);
}
