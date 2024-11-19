import clsx from 'clsx';
import Icon from '~/assets/icons';
import CHRISTMAS_TREE_IMAGE_SRC from '~/assets/icons/christmas-tree.svg';
import SANTA_CLAUS_IMAGE_SRC from '~/assets/icons/santa-claus.svg';
import SNAKE_IMAGE_SRC from '~/assets/icons/snake.svg';
import SVGIcon from '~/core/components/svg-icon';
import { a, div, footer, img, li, p, ul } from '~/core/utils/create-element';
import styles from './footer.module.css';

const CONTACT_LIST = [
  {
    imageSrc: SANTA_CLAUS_IMAGE_SRC,
    text: '+375 (29) 111-22-33',
    href: 'tel:+375291112233',
    heading: 'Call Us',
  },
  {
    imageSrc: CHRISTMAS_TREE_IMAGE_SRC,
    text: 'Magic forest',
    href: 'https://maps.app.goo.gl/8AReebghjkviEnTWA',
    heading: 'meet us',
  },
  {
    imageSrc: SNAKE_IMAGE_SRC,
    text: 'gifts@magic.com',
    href: 'mailto:gifts@magic.com',
    heading: 'write us',
  },
];

const SOCIALS_LIST = [
  { iconName: Icon.TELEGRAM, text: 'telegram social link', href: '#' },
  { iconName: Icon.FACEBOOK, text: 'facebook social link', href: '#' },
  { iconName: Icon.INSTAGRAM, text: 'instagram social link', href: '#' },
  { iconName: Icon.X, text: 'x social link', href: '#' },
];

const PARAGRAPH_TEXT = '© Copyright 2025, All Rights Reserved';
const CAPTION_TEXT = 'Made in Rolling Scopes School';
const RSSCHOOL_WEBSITE_URL = 'https://rs.school/';

export default function Footer(props?: { widgetId?: string }) {
  return footer({ className: styles.footer, ...(props?.widgetId && { id: props.widgetId }) }, [
    div({ className: styles.container }, [
      ul(
        { className: styles.contactsList },
        CONTACT_LIST.map(({ imageSrc, text, href, heading }) =>
          li({ className: styles.contactsListItem }, [
            img({ className: styles.contactIcon, src: imageSrc, alt: '' }),
            a({
              className: clsx(styles.contactLink, 'text-action-large'),
              href,
              text,
              target: '_blank',
              rel: 'noopener noreferrer',
            }),
            p({ className: clsx(styles.contactHeading, 'text-header-3'), textContent: heading }),
          ]),
        ),
      ),
      div({ className: styles.lowerContainer }, [
        ul(
          { className: styles.socialsList },
          SOCIALS_LIST.map(({ iconName, text, href }) =>
            li({ className: styles.socialsListItem }, [
              a({ className: styles.socialLink, href, target: '_blank', rel: 'noopener noreferrer', ariaLabel: text }, [
                SVGIcon({ name: iconName }),
              ]),
            ]),
          ),
        ),
        p({ className: 'text-paragraph', textContent: PARAGRAPH_TEXT }),
        a({
          className: clsx(styles.schoolLink, 'text-caption'),
          text: CAPTION_TEXT,
          href: RSSCHOOL_WEBSITE_URL,
          target: '_blank',
          rel: 'noopener noreferrer',
        }),
      ]),
    ]),
  ]);
}
