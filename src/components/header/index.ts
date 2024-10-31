import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import SVGIcon from '~/components/svg-icon';
import { a, div, header, input, label, li, nav, ul } from '~/utils/create-element';
import isCurrentRoute from '~/utils/is-current-route';
import styles from './header.module.css';

export default function Header(props?: { logoUrl?: string; menuLinkList?: { text: string; href: string }[] }) {
  return header({ className: styles['header'] }, [
    div({ className: styles['container'] }, [
      a({ className: clsx(styles['logo'], 'text-action-small'), ...(props?.logoUrl && { href: props.logoUrl }) }, [
        SVGIcon({ name: Icon.SNOWFLAKE, className: styles['icon'] }),
        'the gifts',
      ]),

      props?.menuLinkList &&
        nav({ className: styles['nav-menu'] }, [
          ul(
            { className: styles['nav-list'] },
            props.menuLinkList.map(({ text, href }) =>
              li({ className: styles['nav-item'] }, [
                a({
                  className: clsx(styles['nav-link'], 'text-action-small', isCurrentRoute(href) && styles['selected']),
                  href,
                  text,
                  inert: isCurrentRoute(href),
                }),
              ]),
            ),
          ),
        ]),

      label({ className: styles['burger'] }, [input({ className: styles['burger-checkbox'], type: 'checkbox' })]),
    ]),
  ]);
}
