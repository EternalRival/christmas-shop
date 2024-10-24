import clsx from 'clsx';
import { div, h1, section } from '~/utils/create-element';
import ExploreButton from './explore-link';
import styles from './hero.module.css';

const CAPTION_TEXT_1 = 'Merry Christmas';
const HEADING_TEXT = 'Gift yourself the magic of new possibilities';
const CAPTION_TEXT_2 = 'and Happy New Year';

export default function Hero() {
  return section({ className: styles['hero'] }, [
    div({ className: styles['content'] }, [
      div({ className: clsx('text-caption', styles['caption']), textContent: CAPTION_TEXT_1 }),
      h1({ className: clsx('text-header-1', styles['heading']), textContent: HEADING_TEXT }),
      ExploreButton(),
      div({ className: clsx('text-caption', styles['caption']), textContent: CAPTION_TEXT_2 }),
    ]),
  ]);
}
