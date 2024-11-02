import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import SVGIcon from '~/components/svg-icon';
import { a } from '~/utils/create-element';
import styles from './header.module.css';

export default function Logo({ logoUrl }: { logoUrl?: string } = {}) {
  return a({ className: clsx(styles['logo'], 'text-action-small'), ...(logoUrl && { href: logoUrl }) }, [
    SVGIcon({ name: Icon.SNOWFLAKE, className: styles['icon'] }),
    'the gifts',
  ]);
}
