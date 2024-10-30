import clsx from 'clsx';
import GIFT_FOR_HARMONY_IMAGE_SRC from '~/assets/images/gift-for-harmony.webp';
import GIFT_FOR_HEALTH_IMAGE_SRC from '~/assets/images/gift-for-health.webp';
import GIFT_FOR_WORK_IMAGE_SRC from '~/assets/images/gift-for-work.webp';
import { article, button, div, h3, img, p, span } from '~/utils/create-element';
import RequiredError from '~/utils/required.error';
import styles from './gift-card.module.css';

const SHOW_DETAILS_BUTTON_TEXT = 'show details';

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

class UnknownGiftCardCategoryError extends Error {
  constructor(category: string) {
    super(`unknown gift card category: ${category}`);
  }
}

function getImageSrcByCategory(category: string) {
  switch (category) {
    case 'For Harmony': {
      return GIFT_FOR_HARMONY_IMAGE_SRC;
    }
    case 'For Health': {
      return GIFT_FOR_HEALTH_IMAGE_SRC;
    }
    case 'For Work': {
      return GIFT_FOR_WORK_IMAGE_SRC;
    }
    default: {
      throw new UnknownGiftCardCategoryError(category);
    }
  }
}

function getCategoryColoringSelectorByCategory(category: string) {
  switch (category) {
    case 'For Harmony': {
      return 'for-harmony-heading';
    }
    case 'For Health': {
      return 'for-health-heading';
    }
    case 'For Work': {
      return 'for-work-heading';
    }
    default: {
      throw new UnknownGiftCardCategoryError(category);
    }
  }
}

export default function GiftCard({ cardData }: GiftCardProps) {
  if (!cardData) {
    throw new RequiredError('cardData');
  }

  const { name, description, category, superpowers } = cardData;

  void { description, superpowers };

  return article({ className: styles['card'] }, [
    img({ className: styles['image'], src: getImageSrcByCategory(category), alt: '', inert: true }),
    div({ className: styles['text-container'] }, [
      p({
        className: clsx(styles[getCategoryColoringSelectorByCategory(category)], 'text-header-4'),
        textContent: category,
      }),
      h3({ className: clsx(styles['name'], 'text-header-3'), textContent: name }),
      button({ className: styles['show-details-button'] }, [
        span({ className: 'sr-only', textContent: SHOW_DETAILS_BUTTON_TEXT }),
      ]),
    ]),
  ]);
}
