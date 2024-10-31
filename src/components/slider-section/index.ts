import clsx from 'clsx';
import CHRISTMAS_TREE_BALL_IMAGE_SRC from '~/assets/images/christmas-tree-ball.webp';
import CHRISTMAS_TREES_IMAGE_SRC from '~/assets/images/christmas-trees.webp';
import FAIRYTALE_HOUSE_IMAGE_SRC from '~/assets/images/fairytale-house.webp';
import SNOWMAN_IMAGE_SRC from '~/assets/images/snowman.webp';
import { button, div, h2, img, p, section, span } from '~/utils/create-element';
import styles from './slider-section.module.css';

type SliderItem =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'image';
      imageSrc: string;
    };

const SLIDER_ITEM_LIST: SliderItem[] = [
  { type: 'text', text: 'Live' },
  { type: 'image', imageSrc: SNOWMAN_IMAGE_SRC },
  { type: 'text', text: 'create' },
  { type: 'image', imageSrc: CHRISTMAS_TREES_IMAGE_SRC },
  { type: 'text', text: 'Love' },
  { type: 'image', imageSrc: CHRISTMAS_TREE_BALL_IMAGE_SRC },
  { type: 'text', text: 'dream' },
  { type: 'image', imageSrc: FAIRYTALE_HOUSE_IMAGE_SRC },
];

const HEADING_TEXT = 'Become Happier!';
const PARAGRAPH_TEXT = 'in the new 2025';
const SLIDER_PREV_BUTTON_TEXT = 'previous slide button';
const SLIDER_NEXT_BUTTON_TEXT = 'next slide button';

class UnknownSliderItemTypeError extends Error {
  constructor() {
    super('unknown slider item type');
  }
}

export default function SliderSection() {
  return section({ className: styles['slider-section'] }, [
    div({ className: styles['container'] }, [
      div({ className: styles['text-container'] }, [
        h2({ className: 'text-caption', textContent: HEADING_TEXT }),
        p({ className: 'text-header-2', textContent: PARAGRAPH_TEXT }),
      ]),
      div({ className: styles['slider-container-outer'] }, [
        div(
          { className: styles['slider-container-inner'] },
          SLIDER_ITEM_LIST.map((item) => {
            switch (item.type) {
              case 'text': {
                return span({ className: clsx(styles['slider-text'], 'text-slider-text'), textContent: item.text });
              }
              case 'image': {
                return img({ className: styles['slider-image'], src: item.imageSrc, alt: '', inert: true });
              }
              default: {
                throw new UnknownSliderItemTypeError();
              }
            }
          }),
        ),
      ]),
      div({ className: styles['slider-buttons-container'] }, [
        button({ className: styles['slider-button'] }, [
          '🡠',
          span({ className: 'sr-only', textContent: SLIDER_PREV_BUTTON_TEXT }),
        ]),
        button({ className: styles['slider-button'] }, [
          '🡢',
          span({ className: 'sr-only', textContent: SLIDER_NEXT_BUTTON_TEXT }),
        ]),
      ]),
    ]),
  ]);
}
