import clsx from 'clsx';
import { a } from '~/core/utils/create-element';
import { Route } from '~/routes/route.enum';
import styles from './explore-button.module.css';

const EXPLORE_BUTTON_TEXT = 'Explore Magical Gifts';
const EXPLORE_BUTTON_HREF = Route.GIFTS;

export default function ExploreButton() {
  return a({
    className: clsx(styles.button, 'text-action-small'),
    text: EXPLORE_BUTTON_TEXT,
    href: EXPLORE_BUTTON_HREF,
  });
}
