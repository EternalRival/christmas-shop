import clsx from 'clsx';
import Icon from '~/assets/icons';
import SVGIcon from '~/core/components/svg-icon';
import { a } from '~/core/utils/create-element';
import styles from './header.module.css';

export default function Logo({ href }: { href: string }) {
  return a({ className: clsx(styles.logo, 'text-action-small'), href }, [
    SVGIcon({ name: Icon.SNOWFLAKE, className: styles.icon }),
    'the gifts',
  ]);
}
