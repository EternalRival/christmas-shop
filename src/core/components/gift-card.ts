import clsx from 'clsx';
import Icon from '~/assets/icons';
import GIFT_FOR_HARMONY_IMAGE_SRC from '~/assets/images/gift-for-harmony.webp';
import GIFT_FOR_HEALTH_IMAGE_SRC from '~/assets/images/gift-for-health.webp';
import GIFT_FOR_WORK_IMAGE_SRC from '~/assets/images/gift-for-work.webp';
import Dialog from '~/core/components/dialog';
import SVGIcon from '~/core/components/svg-icon';
import type { GiftCardData, GiftCategory, SuperpowerValue } from '~/core/models/gift-data.type';
import { article, button, div, h3, img, li, p, span, ul } from '~/core/utils/create-element';
import styles from './gift-card.module.css';

const SHOW_DETAILS_BUTTON_LABEL = 'show details';

const SELECTED_GIFT_MODAL_CLOSE_BUTTON = 'close details';
const SELECTED_GIFT_MODAL_SUPERPOWERS_HEADING_TEXT = 'Adds superpowers to:';

const SUPERPOWER_NAME_LIST = ['live', 'create', 'love', 'dream'] as const;
const SUPERPOWER_SNOWFLAKES_MAP = {
  '+100': [true, false, false, false, false],
  '+200': [true, true, false, false, false],
  '+300': [true, true, true, false, false],
  '+400': [true, true, true, true, false],
  '+500': [true, true, true, true, true],
} satisfies Record<SuperpowerValue, [boolean, boolean, boolean, boolean, boolean]>;

const IMAGE_SRC_MAP = {
  'For Harmony': GIFT_FOR_HARMONY_IMAGE_SRC,
  'For Health': GIFT_FOR_HEALTH_IMAGE_SRC,
  'For Work': GIFT_FOR_WORK_IMAGE_SRC,
} satisfies Record<GiftCategory, string>;

const CATEGORY_NAME_STYLES_MAP = {
  'For Harmony': styles.forHarmonyHeading,
  'For Health': styles.forHealthHeading,
  'For Work': styles.forWorkHeading,
} satisfies Record<GiftCategory, string | undefined>;

function GiftCategoryImage({ category }: { category: GiftCategory }) {
  return img({ className: styles.categoryImage, src: IMAGE_SRC_MAP[category], alt: '', inert: true });
}

function GiftCategoryName({ category }: { category: GiftCategory }) {
  return p({
    className: clsx(CATEGORY_NAME_STYLES_MAP[category], 'text-header-4'),
    textContent: category,
  });
}

class SelectedGiftModal extends Dialog {
  constructor({ giftData }: { giftData: GiftCardData }) {
    super({ className: styles.selectedGiftModal }, [
      article({ className: styles.container }, [
        GiftCategoryImage({ category: giftData.category }),
        div({ className: styles.descriptionContainer }, [
          div({ className: styles.textContainer }, [
            GiftCategoryName({ category: giftData.category }),
            h3({ className: 'text-header-3', textContent: giftData.name, title: giftData.name }),
            p({ className: 'text-paragraph', textContent: giftData.description }),
          ]),
          div({ className: styles.superpowersContainer }, [
            span({ className: 'text-header-4', textContent: SELECTED_GIFT_MODAL_SUPERPOWERS_HEADING_TEXT }),
            ul(
              { className: styles.superpowerList },
              SUPERPOWER_NAME_LIST.map((superpowerName) => {
                return li({ className: styles.superpowerListItem }, [
                  span({ className: clsx(styles.superpowerName, 'text-paragraph'), textContent: superpowerName }),
                  span({ className: 'text-paragraph', textContent: giftData.superpowers[superpowerName] }),
                  ul(
                    { className: styles.snowflakeList },
                    SUPERPOWER_SNOWFLAKES_MAP[giftData.superpowers[superpowerName]]?.map((isFilled) =>
                      li({ className: styles.snowflakeListItem }, [
                        SVGIcon({
                          name: Icon.SNOWFLAKE,
                          className: clsx(styles.snowflakeIcon, !isFilled && styles.transparent),
                        }),
                      ]),
                    ),
                  ),
                ]);
              }),
            ),
          ]),
        ]),
      ]),
      button({
        className: styles.closeButton,
        onclick: () => {
          this.closeDialog();
        },
        ariaLabel: SELECTED_GIFT_MODAL_CLOSE_BUTTON,
      }),
    ]);
  }
}

export default function GiftCard({ giftData }: { giftData?: GiftCardData }) {
  if (!giftData) {
    throw new Error('cardData is required');
  }

  const { name, category } = giftData;

  return article({ className: styles.card }, [
    GiftCategoryImage({ category }),
    div({ className: styles.textContainer }, [
      GiftCategoryName({ category }),
      h3({ className: clsx(styles.name, 'text-header-3'), textContent: name }),
    ]),
    button({
      className: styles.showDetailsButton,
      onclick: () => {
        const selectedGiftModal = new SelectedGiftModal({ giftData });
        document.body.append(selectedGiftModal.getNode());
        selectedGiftModal.openDialog();
      },
      ariaLabel: SHOW_DETAILS_BUTTON_LABEL,
    }),
  ]);
}
