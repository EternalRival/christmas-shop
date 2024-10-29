import { Icon } from '~/assets/icons/icon.enum';
import CHRISTMAS_TREE_BALL_IMAGE_SRC from '~/assets/images/christmas-tree-ball.webp';
import CHRISTMAS_TREES_IMAGE_SRC from '~/assets/images/christmas-trees.webp';
import FAIRYTALE_HOUSE_IMAGE_SRC from '~/assets/images/fairytale-house.webp';
import SNOWMAN_IMAGE_SRC from '~/assets/images/snowman.webp';
import { button, div, h2, img, section } from '~/utils/create-element';
import styles from './slider-section.module.css';
import SVGIcon from './svg-icon';

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

const CAPTION_TEXT = 'Become Happier!';
const HEADER_TEXT = 'in the new 2025';

class UnknownSliderItemTypeError extends Error {
  constructor() {
    super('unknown slider item type');
  }
}

export default function SliderSection() {
  return section({ className: styles['slider-section'] }, [
    div({ className: styles['container'] }, [
      div({ className: styles['text-container'] }, [
        div({ className: 'text-caption', textContent: CAPTION_TEXT }),
        h2({ className: 'text-header-2', textContent: HEADER_TEXT }),
      ]),
      div({ className: styles['slider-container-outer'] }, [
        div(
          { className: styles['slider-container-inner'] },
          SLIDER_ITEM_LIST.map((item) => {
            switch (item.type) {
              case 'text': {
                return div({ className: 'text-slider-text', textContent: item.text });
              }
              case 'image': {
                return img({ className: styles['slider-image'], src: item.imageSrc, alt: '' });
              }
              default: {
                throw new UnknownSliderItemTypeError();
              }
            }
          }),
        ),
      ]),
      div({ className: styles['slider-buttons-container'] }, [
        button({ className: styles['slider-button'] }, [SVGIcon({ name: Icon.ARROW_LEFT })]),
        button({ className: styles['slider-button'] }, [SVGIcon({ name: Icon.ARROW_RIGHT })]),
      ]),
    ]),
  ]);
}
