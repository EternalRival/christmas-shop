import GiftCard from '~/core/components/gift-card';
import type { GiftCardData } from '~/core/models/gift-data.type';
import { li, ul } from '~/core/utils/create-element';
import styles from './gift-list.module.css';

export default class GiftList {
  private readonly node: HTMLUListElement;

  private readonly state: { gifts: GiftCardData[] | null } = { gifts: null };

  constructor({ gifts }: { gifts: GiftCardData[] }) {
    this.state.gifts = gifts;

    this.node = ul({ className: styles.cardList }, this.createGiftListItems('All'));
  }

  public getNode() {
    return this.node;
  }

  public updateGiftListItemsByCategory(category: string) {
    this.getNode().replaceChildren(...this.createGiftListItems(category));
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
      li({ className: styles.cardListItem }, [GiftCard({ giftData: gift })]),
    );
  }
}
