import clsx from 'clsx';
import type { GiftCardData } from '~/core/models/gift-data.type';
import { div, h1, section } from '~/core/utils/create-element';
import GiftList from '../components/gift-list';
import PickCategoryForm from '../components/pick-category-form';
import styles from './gifts-section.module.css';

const HEADING_TEXT = 'Achieve health, harmony, and inner strength';

const TABS_NAME_LIST = ['All', 'for work', 'for health', 'for harmony'];

export default function GiftsSection({ gifts }: { gifts: GiftCardData[] }) {
  const giftList = new GiftList({ gifts });

  return section({ className: styles.giftsSection }, [
    div({ className: styles.container }, [
      h1({ className: clsx(styles.heading, 'text-header-1'), textContent: HEADING_TEXT }),

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
