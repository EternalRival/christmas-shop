import clsx from 'clsx';
import GiftCard from '~/components/gift-card';
import { div, h2, li, p, section, ul } from '~/utils/create-element';
import styles from './best-gifts-section.module.css';

const CAPTION_TEXT = 'Best Gifts';
const HEADER_TEXT = 'especially for you';

type GiftCardData = NonNullable<Parameters<typeof GiftCard>[number]['cardData']>;

function getRandomGifts(gifts: GiftCardData[], count: number) {
  const randomGifts = new Set<GiftCardData>();
  const maxIndex = gifts.length - 1;

  while (randomGifts.size < count) {
    const randomGift = gifts[Math.floor(Math.random() * maxIndex)];

    if (randomGift) {
      randomGifts.add(randomGift);
    }
  }

  return Array.from(randomGifts);
}

export default function BestGiftsSection({ gifts, widgetId }: { gifts: GiftCardData[]; widgetId?: string }) {
  return section({ className: styles['best-gifts-section'], ...(widgetId && { id: widgetId }) }, [
    div({ className: styles['container'] }, [
      div({ className: styles['text-container'] }, [
        p({ className: 'text-caption', textContent: CAPTION_TEXT }),
        h2({ className: clsx('text-header-2'), textContent: HEADER_TEXT }),
      ]),
      ul(
        { className: clsx(styles['cards-list']) },
        getRandomGifts(gifts, 4).map((gift) =>
          li({ className: styles['cards-list-item'] }, [GiftCard({ cardData: gift })]),
        ),
      ),
    ]),
  ]);
}
