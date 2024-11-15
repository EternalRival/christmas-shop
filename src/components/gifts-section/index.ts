import clsx from 'clsx';
import type { GiftCardData } from '~/types/gift-data.type';
import { div, h1, section } from '~/utils/create-element';
import GiftList from './gift-list';
import styles from './gifts-section.module.css';
import PickCategoryForm from './pick-category-form';

const HEADING_TEXT = 'Achieve health, harmony, and inner strength';

const TABS_NAME_LIST = ['All', 'for work', 'for health', 'for harmony'];

export default function GiftsSection({ gifts }: { gifts: GiftCardData[] }) {
  const giftList = new GiftList({ gifts });

  return section({ className: styles['gifts-section'] }, [
    div({ className: styles['container'] }, [
      h1({ className: clsx(styles['heading'], 'text-header-1'), textContent: HEADING_TEXT }),

      PickCategoryForm({
        categoryList: TABS_NAME_LIST,
        onCategoryChange(newTab) {
          giftList.updateGiftListItemsByCategory(newTab);
        },
      }),

      giftList.getNode(),
    ]),
  ]);
}
