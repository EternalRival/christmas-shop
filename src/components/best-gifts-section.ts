import clsx from 'clsx';
import { div, h2, section } from '~/utils/create-element';
import styles from './best-gifts-section.module.css';
import GiftCard from './gift-card';

const BEST_GIFTS_NAME_LIST = ['Console.log Guru', 'Hydration Bot', 'Merge Master', 'Spontaneous Coding Philosopher'];

const CAPTION_TEXT = 'Best Gifts';
const HEADER_TEXT = 'especially for you';

type GiftCardData = NonNullable<Parameters<typeof GiftCard>[number]['cardData']>;

export default function BestGiftsSection({ gifts }: { gifts: GiftCardData[] }) {
  return section({ className: styles['best-gifts-section'] }, [
    div({ className: styles['content'] }, [
      div({ className: styles['text-container'] }, [
        div({ className: 'text-caption', textContent: CAPTION_TEXT }),
        h2({ className: clsx('text-header-2'), textContent: HEADER_TEXT }),
      ]),
      div(
        { className: styles['cards-container'] },
        BEST_GIFTS_NAME_LIST.map((name) => GiftCard({ cardData: gifts.find((gift) => gift.name === name) })),
      ),
    ]),
  ]);
}
