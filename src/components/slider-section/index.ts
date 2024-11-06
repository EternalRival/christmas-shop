import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import CHRISTMAS_TREE_BALL_IMAGE_SRC from '~/assets/images/christmas-tree-ball.webp';
import CHRISTMAS_TREES_IMAGE_SRC from '~/assets/images/christmas-trees.webp';
import FAIRYTALE_HOUSE_IMAGE_SRC from '~/assets/images/fairytale-house.webp';
import SNOWMAN_IMAGE_SRC from '~/assets/images/snowman.webp';
import SVGIcon from '~/components/svg-icon';
import { button, div, h2, img, p, section, span } from '~/utils/create-element';
import styles from './slider-section.module.css';
import SliderService from './slider.service';

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
const SLIDER_PREV_BUTTON_LABEL = 'previous slide button';
const SLIDER_NEXT_BUTTON_LABEL = 'next slide button';

class UnknownSliderItemTypeError extends Error {
  constructor() {
    super('unknown slider item type');
  }
}

export default function SliderSection() {
  const sliderSection = section({ className: styles['slider-section'] });

  const container = div({ className: styles['container'] });

  const textContainer = div({ className: styles['text-container'] });
  const sliderContainer = div(
    { className: styles['slider-container'] },
    SLIDER_ITEM_LIST.map((item) => {
      switch (item.type) {
        case 'text': {
          return span({ className: clsx(styles['slider-text'], 'text-slider-text'), textContent: item.text });
        }

        case 'image': {
          return img({
            className: styles['slider-image'],
            width: 200,
            height: 200,
            src: item.imageSrc,
            alt: '',
            inert: true,
          });
        }

        default: {
          throw new UnknownSliderItemTypeError();
        }
      }
    }),
  );
  const buttonsContainer = div({ className: styles['slider-buttons-container'] });

  const heading = h2({ className: 'text-caption', textContent: HEADING_TEXT });
  const paragraph = p({ className: 'text-header-2', textContent: PARAGRAPH_TEXT });

  const prevButton = button({ className: styles['slider-button'], ariaLabel: SLIDER_PREV_BUTTON_LABEL }, [
    SVGIcon({ name: Icon.ARROW_LEFT }),
  ]);
  const nextButton = button({ className: styles['slider-button'], ariaLabel: SLIDER_NEXT_BUTTON_LABEL }, [
    SVGIcon({ name: Icon.ARROW_RIGHT }),
  ]);

  const sliderService = new SliderService({
    getPadding: () => Number.parseInt(window.getComputedStyle(sliderSection).paddingInline, 10),
    getMargin: () => Number.parseInt(window.getComputedStyle(container).marginInline, 10),
    getWrapperWidth: () => sliderSection.clientWidth,
    getContainerWidth: () => sliderContainer.scrollWidth,
    getMaxStepsValue: () => (window.innerWidth >= 768 ? 3 : 6),
    getElementToObserveResize: () => sliderSection,
    onOffsetChange: ({ newOffset }) => {
      sliderContainer.style.transform = `translateX(-${newOffset}px)`;
    },
    onSlideChange: ({ isFirst, isLast }) => {
      prevButton.disabled = isFirst;
      nextButton.disabled = isLast;
    },
  });

  prevButton.addEventListener('click', sliderService.prev);
  nextButton.addEventListener('click', sliderService.next);

  sliderSection.append(container);
  container.append(textContainer, sliderContainer, buttonsContainer);
  textContainer.append(heading, paragraph);
  buttonsContainer.append(prevButton, nextButton);

  return sliderSection;
}
