import clsx from 'clsx';
import SANTA_IMAGE_SRC from '~/assets/images/santa.webp';
import { div, h2, img, p, section } from '~/utils/create-element';
import styles from './about-section.module.css';

const CAPTION_TEXT = 'About';
const HEADER_TEXT = 'Unleash your inner superhero!';
const PARAGRAPH_TEXT =
  'This New Year marks the beginning of your journey to inner harmony and new strengths. We offer unique gifts that will help you improve your life.';

export default function AboutSection() {
  return section({ className: styles['about'] }, [
    div({ className: styles['content'] }, [
      div({ className: styles['text-container-outer'] }, [
        div({ className: styles['text-container-inner'] }, [
          div({ className: clsx(styles['caption'], 'text-caption'), textContent: CAPTION_TEXT }),
          h2({ className: clsx(styles['heading'], 'text-header-2'), textContent: HEADER_TEXT }),
          p({ className: clsx(styles['paragraph'], 'text-paragraph'), textContent: PARAGRAPH_TEXT }),
        ]),
      ]),
      div({ className: styles['image-container'] }, [img({ src: SANTA_IMAGE_SRC, inert: true })]),
    ]),
  ]);
}
