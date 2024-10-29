import clsx from 'clsx';
import { a } from '~/utils/create-element';
import styles from './explore-button.module.css';

const EXPLORE_BUTTON_TEXT = 'Explore Magical Gifts';
const EXPLORE_BUTTON_HREF = '/gifts';

export default function ExploreButton() {
  return a({
    className: clsx(styles['button'], 'text-action-small'),
    text: EXPLORE_BUTTON_TEXT,
    href: EXPLORE_BUTTON_HREF,
  });
}