import clsx from 'clsx';
import { div, h1, section } from '~/utils/create-element';
import GiftCard from '../gift-card';
import GiftList from './gift-list';
import GiftTabList from './gift-tab-list';
import styles from './gifts-section.module.css';

const HEADING_TEXT = 'Achieve health, harmony, and inner strength';

const TABS_NAME_LIST = ['All', 'for work', 'for health', 'for harmony'];

type GiftCardData = NonNullable<Parameters<typeof GiftCard>[number]['cardData']>;

export default function GiftsSection({ gifts }: { gifts: GiftCardData[] }) {
  const giftList = new GiftList({ gifts });

  const giftTabList = new GiftTabList({
    tabNameList: TABS_NAME_LIST,
    onTabClick(newTab) {
      giftList.updateGiftListItemsByCategory(newTab);
    },
  });

  return section({ className: styles['gifts-section'] }, [
    div({ className: styles['container'] }, [
      h1({ className: clsx(styles['heading'], 'text-header-1'), textContent: HEADING_TEXT }),

      giftTabList.getNode(),

      giftList.getNode(),
    ]),
  ]);
}
