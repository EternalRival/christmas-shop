import GIFT_FOR_HARMONY_IMAGE_SRC from '~/assets/images/gift-for-harmony.webp';
import GIFT_FOR_HEALTH_IMAGE_SRC from '~/assets/images/gift-for-health.webp';
import GIFT_FOR_WORK_IMAGE_SRC from '~/assets/images/gift-for-work.webp';
import { img } from '~/utils/create-element';
import UnknownGiftCategoryError from '~/utils/unknown-gift-category.error';
import styles from './gift-category-image.module.css';

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
      throw new UnknownGiftCategoryError(category);
    }
  }
}

export default function GiftCategoryImage({ category }: { category: string }) {
  return img({ className: styles['category-image'], src: getImageSrcByCategory(category), alt: '', inert: true });
}
