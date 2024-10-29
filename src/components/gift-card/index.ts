import clsx from 'clsx';
import GIFT_FOR_HARMONY_IMAGE_SRC from '~/assets/images/gift-for-harmony.webp';
import GIFT_FOR_HEALTH_IMAGE_SRC from '~/assets/images/gift-for-health.webp';
import GIFT_FOR_WORK_IMAGE_SRC from '~/assets/images/gift-for-work.webp';
import { article, button, div, img, p } from '~/utils/create-element';
import RequiredError from '~/utils/required.error';
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
    img({ className: styles['image'], src: getImageSrcByCategory(category), alt: '' }),
    div({ className: styles['text-container'] }, [
      p({
        className: clsx(styles[getCategoryColoringSelectorByCategory(category)], 'text-header-4'),
        textContent: category,
      }),
      button({ className: clsx(styles['name'], 'text-header-3'), textContent: name }),
    ]),
  ]);
}
