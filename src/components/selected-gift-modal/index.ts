import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import Dialog from '~/components/dialog';
import GiftCategoryImage from '~/components/gift-category-image';
import GiftCategoryName from '~/components/gift-category-name';
import SVGIcon from '~/components/svg-icon';
import type { GiftCardData } from '~/types/gift-data.type';
import { article, button, div, h3, li, p, span, ul } from '~/utils/create-element';
import styles from './selected-gift-modal.module.css';

const CLOSE_BUTTON_LABEL = 'close details';
const SUPERPOWERS_HEADING_TEXT = 'Adds superpowers to:';

type SuperpowerName = 'live' | 'create' | 'love' | 'dream';

type SuperpowerSnowflakeList = [boolean, boolean, boolean, boolean, boolean];

const SUPERPOWER_NAME_LIST: SuperpowerName[] = ['live', 'create', 'love', 'dream'];
const SUPERPOWER_SNOWFLAKES_MAP: Record<string, SuperpowerSnowflakeList> = {
  '+100': [true, false, false, false, false],
  '+200': [true, true, false, false, false],
  '+300': [true, true, true, false, false],
  '+400': [true, true, true, true, false],
  '+500': [true, true, true, true, true],
};

function SnowflakeList({ giftData, superpowerName }: { giftData: GiftCardData; superpowerName: SuperpowerName }) {
  const superpowerSnowflakeList = SUPERPOWER_SNOWFLAKES_MAP[giftData.superpowers[superpowerName]];

  return ul(
    { className: styles['snowflake-list'] },
    superpowerSnowflakeList?.map((isFilled) =>
      li({ className: styles['snowflake-list-item'] }, [
        SVGIcon({
          name: Icon.SNOWFLAKE,
          className: clsx(styles['snowflake-icon'], !isFilled && styles['transparent']),
        }),
      ]),
    ),
  );
}

function SuperpowerList({ giftData }: { giftData: GiftCardData }) {
  return ul(
    { className: styles['superpower-list'] },
    SUPERPOWER_NAME_LIST.map((superpowerName) =>
      li({ className: styles['superpower-list-item'] }, [
        span({ className: clsx(styles['superpower-name'], 'text-paragraph'), textContent: superpowerName }),
        span({ className: 'text-paragraph', textContent: giftData.superpowers[superpowerName] }),
        SnowflakeList({ giftData, superpowerName }),
      ]),
    ),
  );
}

export default class SelectedGiftModal extends Dialog {
  constructor({ giftData }: { giftData: GiftCardData }) {
    super({ className: styles['selected-gift-modal'] }, [
      article({ className: styles['container'] }, [
        GiftCategoryImage({ category: giftData.category }),
        div({ className: styles['description-container'] }, [
          div({ className: styles['text-container'] }, [
            GiftCategoryName({ category: giftData.category }),
            h3({ className: 'text-header-3', textContent: giftData.name, title: giftData.name }),
            p({ className: 'text-paragraph', textContent: giftData.description }),
          ]),
          div({ className: styles['superpowers-container'] }, [
            span({ className: 'text-header-4', textContent: SUPERPOWERS_HEADING_TEXT }),
            SuperpowerList({ giftData }),
          ]),
        ]),
      ]),

      button({
        className: styles['close-button'],
        onclick: () => {
          this.closeDialog();
        },
        ariaLabel: CLOSE_BUTTON_LABEL,
      }),
    ]);
  }
}
