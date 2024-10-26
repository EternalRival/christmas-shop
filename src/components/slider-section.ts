import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import { button, div, h2, img, section } from '~/utils/create-element';
import CHRISTMAS_TREE_BALL_IMAGE_SRC from '../assets/images/christmas-tree-ball.webp';
import CHRISTMAS_TREES_IMAGE_SRC from '../assets/images/christmas-trees.webp';
import FAIRYTALE_HOUSE_IMAGE_SRC from '../assets/images/fairytale-house.webp';
import SNOWMAN_IMAGE_SRC from '../assets/images/snowman.webp';
import styles from './slider-section.module.css';
import SVGIcon from './svg-icon';

const SLIDER_ITEM_LIST = [
  { type: 'text', text: 'Live' },
  { type: 'image', imageSrc: SNOWMAN_IMAGE_SRC },
  { type: 'text', text: 'create' },
  { type: 'image', imageSrc: CHRISTMAS_TREES_IMAGE_SRC },
  { type: 'text', text: 'Love' },
  { type: 'image', imageSrc: CHRISTMAS_TREE_BALL_IMAGE_SRC },
  { type: 'text', text: 'dream' },
  { type: 'image', imageSrc: FAIRYTALE_HOUSE_IMAGE_SRC },
];
const CAPTION_TEXT = 'Become Happier!';
const HEADER_TEXT = 'in the new 2025';

void SLIDER_ITEM_LIST;
void clsx;
void img;

export default function SliderSection() {
  return section({ className: styles['slider-section'] }, [
    div({ className: styles['content'] }, [
      div({ className: styles['text-container'] }, [
        div({ className: 'text-caption', textContent: CAPTION_TEXT }),
        h2({ className: 'text-header-2', textContent: HEADER_TEXT }),
      ]),
      div({ className: styles['slider-container-outer'] }, [
        div(
          { className: styles['slider-container-inner'] },
          SLIDER_ITEM_LIST.map((item) => {
            switch (item.type) {
              case 'text':
                return div({ className: 'text-slider-text', textContent: item.text });
              case 'image':
                return div({ className: styles['slider-image-container'] }, [img({ src: item.imageSrc })]);
              default:
                throw new Error('unknown item type');
            }
          }),
        ),
      ]),
      div({ className: styles['slider-buttons-container'] }, [
        button({ className: styles['slider-button'] }, [SVGIcon({ name: Icon.ARROW_LEFT })]),
        button({ className: styles['slider-button'] }, [SVGIcon({ name: Icon.ARROW_RIGHT })]),
      ]),

      /* div({ className: styles['text-container-outer'] }, [
        div({ className: styles['text-container-inner'] }, [
          div({ className: clsx(styles['caption'], 'text-caption'), textContent: CAPTION_TEXT }),
          h2({ className: clsx(styles['heading'], 'text-header-2'), textContent: HEADER_TEXT }),
        ]),
      ]),
      div({ className: styles['image-container'] }, [img({ src: SANTA_IMAGE_SRC, inert: true })]), */
    ]),
  ]);
}
