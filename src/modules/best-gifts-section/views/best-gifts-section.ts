import clsx from 'clsx';
import GiftCard from '~/core/components/gift-card';
import type { GiftCardData } from '~/core/models/gift-data.type';
import { div, h2, li, section, span, ul } from '~/core/utils/create-element';
import styles from './best-gifts-section.module.css';

const CAPTION_TEXT = 'Best Gifts';
const HEADER_TEXT = 'especially for you';

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
  return section({ className: styles.bestGiftsSection, ...(widgetId && { id: widgetId }) }, [
    div({ className: styles.container }, [
      h2({ className: styles.heading }, [
        span({ className: 'text-caption', textContent: CAPTION_TEXT }),
        span({ className: 'text-header-2', textContent: HEADER_TEXT }),
      ]),
      ul(
        { className: clsx(styles.cardsList) },
        getRandomGifts(gifts, 4).map((gift) => li({ className: styles.cardsListItem }, [GiftCard({ giftData: gift })])),
      ),
    ]),
  ]);
}
