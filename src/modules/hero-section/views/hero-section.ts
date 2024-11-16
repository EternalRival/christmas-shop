import clsx from 'clsx';
import ExploreButton from '~/core/components/explore-button';
import { div, h1, p, section } from '~/core/utils/create-element';
import styles from './hero-section.module.css';

const CAPTION_TEXT_1 = 'Merry Christmas';
const HEADING_TEXT = 'Gift yourself the magic of new possibilities';
const CAPTION_TEXT_2 = 'and Happy New Year';

export default function HeroSection() {
  return section({ className: styles.heroSection }, [
    div({ className: styles.container }, [
      p({ className: 'text-caption', textContent: CAPTION_TEXT_1 }),
      h1({ className: clsx(styles.heading, 'text-header-1'), textContent: HEADING_TEXT }),
      ExploreButton(),
      p({ className: 'text-caption', textContent: CAPTION_TEXT_2 }),
    ]),
  ]);
}
