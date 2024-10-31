import { button, div, h1, li, section, ul } from '~/utils/create-element';
import styles from './gifts-section.module.css';
import clsx from 'clsx';
import GiftCard from '../gift-card';

const HEADING_TEXT = 'Achieve health, harmony, and inner strength';

const TABS_NAME_LIST = ['All', 'for work', 'for health', 'for harmony'];

type GiftCardData = NonNullable<Parameters<typeof GiftCard>[number]['cardData']>;

export default function GiftsSection({ gifts }: { gifts: GiftCardData[] }) {
  const currentTab = TABS_NAME_LIST[0];

  return section({ className: styles['gifts-section'] }, [
    div({ className: styles['container'] }, [
      h1({ className: clsx(styles['heading'], 'text-header-1'), textContent: HEADING_TEXT }),
      ul(
        { className: styles['tab-list'] },
        TABS_NAME_LIST.map((name) =>
          li({ className: styles['tab-list-item'] }, [
            button({
              className: clsx(styles['tab-button'], 'text-action-small', currentTab === name && styles['selected']),
              textContent: name,
            }),
          ]),
        ),
      ),
      ul(
        { className: styles['card-list'] },
        gifts.map((gift) => li({ className: styles['card-list-item'] }, [GiftCard({ cardData: gift })])),
      ),
    ]),
  ]);
}
