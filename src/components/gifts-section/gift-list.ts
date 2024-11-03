import { li, ul } from '~/utils/create-element';
import GiftCard from '../gift-card';
import styles from './gifts-section.module.css';

type GiftCardData = NonNullable<Parameters<typeof GiftCard>[number]['cardData']>;

export default class GiftList {
  private readonly node: HTMLUListElement;

  private readonly state: { gifts: GiftCardData[] | null } = { gifts: null };

  constructor({ gifts }: { gifts: GiftCardData[] }) {
    this.state.gifts = gifts;

    this.node = ul({ className: styles['card-list'] }, this.createGiftListItems('All'));
  }

  private getFilteredGifts(category: string): GiftCardData[] {
    const gifts = this.state.gifts ?? [];

    if (category === 'All') {
      return gifts;
    }

    return gifts.filter((gift) => gift.category.toLowerCase() === category.toLowerCase());
  }

  private createGiftListItems(category: string) {
    return this.getFilteredGifts(category).map((gift) =>
      li({ className: styles['card-list-item'] }, [GiftCard({ cardData: gift })]),
    );
  }

  public getNode() {
    return this.node;
  }

  public updateGiftListItemsByCategory(category: string) {
    this.getNode().replaceChildren(...this.createGiftListItems(category));
  }
}
