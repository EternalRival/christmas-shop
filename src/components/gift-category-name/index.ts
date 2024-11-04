import clsx from 'clsx';
import { p } from '~/utils/create-element';
import UnknownGiftCategoryError from '~/utils/unknown-gift-category.error';
import styles from './gift-category-name.module.css';

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
      throw new UnknownGiftCategoryError(category);
    }
  }
}

export default function GiftCategoryName({ category }: { category: string }) {
  return p({
    className: clsx(styles[getCategoryColoringSelectorByCategory(category)], 'text-header-4'),
    textContent: category,
  });
}
