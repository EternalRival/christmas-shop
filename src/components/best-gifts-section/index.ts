import clsx from 'clsx';
import GiftCard from '~/components/gift-card';
import { div, h2, p, section } from '~/utils/create-element';
import styles from './best-gifts-section.module.css';

const BEST_GIFTS_NAME_LIST = ['Console.log Guru', 'Hydration Bot', 'Merge Master', 'Spontaneous Coding Philosopher'];

const CAPTION_TEXT = 'Best Gifts';
const HEADER_TEXT = 'especially for you';

type GiftCardData = NonNullable<Parameters<typeof GiftCard>[number]['cardData']>;

export default function BestGiftsSection({ gifts }: { gifts: GiftCardData[] }) {
  return section({ className: styles['best-gifts-section'] }, [
    div({ className: styles['container'] }, [
      div({ className: styles['text-container'] }, [
        p({ className: 'text-caption', textContent: CAPTION_TEXT }),
        h2({ className: clsx('text-header-2'), textContent: HEADER_TEXT }),
      ]),
      div(
        { className: styles['cards-container'] },
        BEST_GIFTS_NAME_LIST.map((name) => GiftCard({ cardData: gifts.find((gift) => gift.name === name) })),
      ),
    ]),
  ]);
}
