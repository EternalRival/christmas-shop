import clsx from 'clsx';
import h from '~/utils/h';
import styles from './header.module.css';
import Icon from './icon';

const MENU_LINKS = [
  { text: 'gifts', href: '#gifts' },
  { text: 'about', href: '#about' },
  { text: 'best', href: '#best' },
  { text: 'contacts', href: '#contacts' },
];

export default function Header() {
  return h('header', { className: styles['header'] }, [
    h('a', { className: clsx('text-action-small', styles['logo']), href: '#' }, [
      Icon({ name: 'snowflake', className: styles['icon'] }),
      'the gifts',
    ]),

    h('nav', { className: styles['nav-menu'] }, [
      h(
        'ul',
        { className: styles['nav-list'] },
        MENU_LINKS.map(({ text, href }) =>
          h('li', { className: styles['nav-item'] }, [
            h('a', { className: clsx(styles['nav-link'], 'text-action-small'), href, text }),
          ]),
        ),
      ),
    ]),

    h('label', { className: styles['burger'] }, [
      h('input', { className: styles['burger-checkbox'], type: 'checkbox' }),
    ]),
  ]);
}
