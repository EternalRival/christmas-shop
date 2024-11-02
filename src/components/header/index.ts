import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import SVGIcon from '~/components/svg-icon';
import { a, div, header, input, label, li, nav, ul } from '~/utils/create-element';
import isCurrentRoute from '~/utils/is-current-route';
import styles from './header.module.css';

// TODO вынести в utils
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function NavMenu({ linkList }: { linkList: { text: string; href: string }[] }) {
  return nav({ className: styles['nav-menu'] }, [
    ul(
      { className: styles['nav-list'] },
      linkList.map(({ text, href }) =>
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
  ]);
}

export default function Header(props?: { logoUrl?: string; menuLinkList?: { text: string; href: string }[] }) {
  const navMenu = props?.menuLinkList && NavMenu({ linkList: props.menuLinkList });
  const burgerCheckbox = input({
    className: styles['burger-checkbox'],
    type: 'checkbox',
    onchange: () => {
      if (burgerCheckbox.checked) {
        scrollToTop();
      }
    },
  });

  const closeBurger = () => {
    burgerCheckbox.checked = false;
  }

  if (navMenu) {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(({ contentRect }) => {
        if (contentRect.width !== document.documentElement.clientWidth) {
          closeBurger();
        }
      });
    });

    resizeObserver.observe(navMenu);
  }

  return header({ className: styles['header'] }, [
    div({ className: styles['container'] }, [
      a({ className: clsx(styles['logo'], 'text-action-small'), ...(props?.logoUrl && { href: props.logoUrl }) }, [
        SVGIcon({ name: Icon.SNOWFLAKE, className: styles['icon'] }),
        'the gifts',
      ]),

      navMenu,

      label({ className: styles['burger'] }, [burgerCheckbox]),
    ]),
  ]);
}
