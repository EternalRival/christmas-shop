import clsx from 'clsx';
import { Route } from '~/app/routes/route.enum';
import { Icon } from '~/assets/icons/icon.enum';
import SVGIcon from '~/components/svg-icon';
import { a, div, header, input, label, li, nav, ul } from '~/utils/create-element';
import isCurrentRoute from '~/utils/is-current-route';
import styles from './header.module.css';

const MENU_LINK_LIST = [
  { text: 'gifts', href: Route.GIFTS },
  { text: 'about', href: '#about' },
  { text: 'best', href: '#best' },
  { text: 'contacts', href: '#contacts' },
];

export default function Header() {
  return header({ className: styles['header'] }, [
    div({ className: styles['container'] }, [
      a({ className: clsx(styles['logo'], 'text-action-small'), href: Route.HOME }, [
        SVGIcon({ name: Icon.SNOWFLAKE, className: styles['icon'] }),
        'the gifts',
      ]),

      nav({ className: styles['nav-menu'] }, [
        ul(
          { className: styles['nav-list'] },
          MENU_LINK_LIST.map(({ text, href }) =>
            li({ className: styles['nav-item'] }, [
              a({
                className: clsx(styles['nav-link'], 'text-action-small', isCurrentRoute(href) && styles['selected']),
                href,
                text,
              }),
            ]),
          ),
        ),
      ]),

      label({ className: styles['burger'] }, [input({ className: styles['burger-checkbox'], type: 'checkbox' })]),
    ]),
  ]);
}
