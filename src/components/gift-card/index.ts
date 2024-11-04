import clsx from 'clsx';
import GiftCategoryImage from '~/components/gift-category-image';
import GiftCategoryName from '~/components/gift-category-name';
import SelectedGiftModal from '~/components/selected-gift-modal';
import type { GiftCardData } from '~/types/gift-data.type';
import { article, button, div, h3, span } from '~/utils/create-element';
import RequiredError from '~/utils/required.error';
import styles from './gift-card.module.css';

const SHOW_DETAILS_BUTTON_TEXT = 'show details';

export default function GiftCard({ giftData }: { giftData?: GiftCardData }) {
  if (!giftData) {
    throw new RequiredError('cardData');
  }

  const { name, description, category, superpowers } = giftData;

  void { description, superpowers };

  return article({ className: styles['card'] }, [
    GiftCategoryImage({ category }),
    div({ className: styles['text-container'] }, [
      GiftCategoryName({ category }),
      h3({ className: clsx(styles['name'], 'text-header-3'), textContent: name, title: name }),
    ]),
    button(
      {
        className: styles['show-details-button'],
        onclick: () => {
          const selectedGiftModal = SelectedGiftModal({ giftData });
          document.body.append(selectedGiftModal);
          selectedGiftModal.showModal();
        },
      },
      [span({ className: 'sr-only', textContent: SHOW_DETAILS_BUTTON_TEXT })],
    ),
  ]);
}
