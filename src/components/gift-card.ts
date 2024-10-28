import clsx from 'clsx';
import GIFT_FOR_HARMONY_IMAGE_SRC from '~/assets/images/gift-for-harmony.webp';
import GIFT_FOR_HEALTH_IMAGE_SRC from '~/assets/images/gift-for-health.webp';
import GIFT_FOR_WORK_IMAGE_SRC from '~/assets/images/gift-for-work.webp';
import { div, h3, h4, img } from '~/utils/create-element';
import styles from './gift-card.module.css';

type GiftCardData = {
  name: string;
  description: string;
  category: string;
  superpowers: {
    live: string;
    create: string;
    love: string;
    dream: string;
  };
};

type GiftCardProps = {
  cardData?: GiftCardData;
};

function getImageSrcByCategory(category: string) {
  switch (category) {
    case 'For Harmony':
      return GIFT_FOR_HARMONY_IMAGE_SRC;
    case 'For Health':
      return GIFT_FOR_HEALTH_IMAGE_SRC;
    case 'For Work':
      return GIFT_FOR_WORK_IMAGE_SRC;
    default:
      throw new Error(`unknown category: ${category}`);
  }
}

function getHeadingColoringSelectorByCategory(category: string) {
  switch (category) {
    case 'For Harmony':
      return 'for-harmony-heading';
    case 'For Health':
      return 'for-health-heading';
    case 'For Work':
      return 'for-work-heading';
    default:
      throw new Error(`unknown category: ${category}`);
  }
}

export default function GiftCard({ cardData }: GiftCardProps) {
  if (!cardData) {
    throw new Error('cardData is required');
  }

  const { name, description, category, superpowers } = cardData;

  void { description, superpowers };

  return div({ className: styles['card'] }, [
    div({ className: styles['image-container'] }, [img({ src: getImageSrcByCategory(category) })]),
    div({ className: styles['text-container'] }, [
      h4({
        className: clsx(styles[getHeadingColoringSelectorByCategory(category)], 'text-header-4'),
        textContent: category,
      }),
      h3({ className: 'text-header-3', textContent: name }),
    ]),
  ]);
}
