import clsx from 'clsx';
import { a, header, input, label, li, nav, ul } from '~/utils/create-element';
import styles from './header.module.css';
import Icon from './icon';

const MENU_LINKS = [
  { text: 'gifts', href: '#gifts' },
  { text: 'about', href: '#about' },
  { text: 'best', href: '#best' },
  { text: 'contacts', href: '#contacts' },
];

export default function Header() {
  return header({ className: styles['header'] }, [
    a({ className: clsx('text-action-small', styles['logo']), href: '#' }, [
      Icon({ name: 'snowflake', className: styles['icon'] }),
      'the gifts',
    ]),

    nav({ className: styles['nav-menu'] }, [
      ul(
        { className: styles['nav-list'] },
        MENU_LINKS.map(({ text, href }) =>
          li({ className: styles['nav-item'] }, [
            a({ className: clsx(styles['nav-link'], 'text-action-small'), href, text }),
          ]),
        ),
      ),
    ]),

    label({ className: styles['burger'] }, [input({ className: styles['burger-checkbox'], type: 'checkbox' })]),
  ]);
}
