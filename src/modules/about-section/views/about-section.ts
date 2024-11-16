import clsx from 'clsx';
import SANTA_IMAGE_SRC from '~/assets/images/santa.webp';
import { div, h2, img, p, section } from '~/core/utils/create-element';
import styles from './about-section.module.css';

const HEADING_TEXT = 'About';
const PARAGRAPH_1_TEXT = 'Unleash your inner superhero!';
const PARAGRAPH_2_TEXT =
  'This New Year marks the beginning of your journey to inner harmony and new strengths. We offer unique gifts that will help you improve your life.';

export default function AboutSection(props?: { widgetId?: string }) {
  return section({ className: styles.aboutSection, ...(props?.widgetId && { id: props.widgetId }) }, [
    div({ className: styles.container }, [
      div({ className: styles.textContainerOuter }, [
        div({ className: styles.textContainerInner }, [
          h2({ className: clsx(styles.caption, 'text-caption'), textContent: HEADING_TEXT }),
          p({ className: 'text-header-2', textContent: PARAGRAPH_1_TEXT }),
          p({ className: 'text-paragraph', textContent: PARAGRAPH_2_TEXT }),
        ]),
      ]),
      img({ className: styles.image, src: SANTA_IMAGE_SRC, alt: '', inert: true }),
    ]),
  ]);
}
