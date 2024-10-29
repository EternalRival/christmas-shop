import clsx from 'clsx';
import CHRISTMAS_TREE_IMAGE_SRC from '~/assets/icons/christmas-tree.svg';
import { Icon } from '~/assets/icons/icon.enum';
import SANTA_CLAUS_IMAGE_SRC from '~/assets/icons/santa-claus.svg';
import SNAKE_IMAGE_SRC from '~/assets/icons/snake.svg';
import { a, div, footer, h3, img, span } from '~/utils/create-element';
import styles from './footer.module.css';
import SVGIcon from './svg-icon';

const CONTACT_LIST = [
  { imageSrc: SANTA_CLAUS_IMAGE_SRC, text: '+375 (29) 111-22-33', href: 'tel:+375291112233', heading: 'Call Us' },
  {
    imageSrc: CHRISTMAS_TREE_IMAGE_SRC,
    text: 'Magic forest',
    href: 'https://maps.app.goo.gl/8AReebghjkviEnTWA',
    heading: 'meet us',
  },
  { imageSrc: SNAKE_IMAGE_SRC, text: 'gifts@magic.com', href: 'mailto:gifts@magic.com', heading: 'write us' },
];

const SOCIALS_LIST = [
  { iconName: Icon.TELEGRAM, text: 'telegram social link', href: '#' },
  { iconName: Icon.FACEBOOK, text: 'facebook social link', href: '#' },
  { iconName: Icon.INSTAGRAM, text: 'instagram social link', href: '#' },
  { iconName: Icon.X, text: 'x social link', href: '#' },
];

const PARAGRAPH_TEXT = '\xa9 Copyright 2025, All Rights Reserved';
const CAPTION_TEXT = 'Made in Rolling Scopes School';

export default function Footer() {
  return footer({ className: styles['footer'] }, [
    div({ className: styles['container'] }, [
      div(
        { className: styles['contacts-container'] },
        CONTACT_LIST.map(({ imageSrc, text, href, heading }) =>
          div({ className: styles['contact-container'] }, [
            img({ className: styles['contact-icon'], src: imageSrc, alt: '' }),
            a({ className: clsx(styles['contact-link'], 'text-action-large'), href, text, target: '_blank' }),
            h3({ className: clsx(styles['contact-heading'], 'text-header-3'), textContent: heading }),
          ]),
        ),
      ),
      div({ className: styles['lower-container'] }, [
        div(
          { className: styles['socials-container'] },
          SOCIALS_LIST.map(({ iconName, text, href }) =>
            a({ className: styles['social-link'], href }, [
              SVGIcon({ name: iconName }),
              span({ className: 'sr-only', textContent: text }),
            ]),
          ),
        ),
        div({ className: 'text-paragraph', textContent: PARAGRAPH_TEXT }),
        div({ className: 'text-caption', textContent: CAPTION_TEXT }),
      ]),
    ]),
  ]);
}
