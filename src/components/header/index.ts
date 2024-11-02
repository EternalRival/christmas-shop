import { div, header } from '~/utils/create-element';
import BurgerButton from './burger-button';
import styles from './header.module.css';
import Logo from './logo';
import NavMenu from './nav-menu';
import scrollWindowToTop from '~/utils/scroll-window-to-top';

export default function Header({
  logoUrl,
  menuLinkList,
}: { logoUrl?: string; menuLinkList?: { text: string; href: string }[] } = {}) {
  const logo = Logo({ logoUrl });

  const navMenu = new NavMenu({
    linkList: menuLinkList,
    onResize: () => {
      if (!navMenu.isFullViewportWidth() && burgerButton.isOpen()) {
        burgerButton.toggleOpen(false);
      }
    },
    onClose: () => {
      burgerButton.toggleOpen(false);
    },
  });

  const burgerButton = new BurgerButton({
    onChangeOpenState: (newState) => {
      if (newState) {
        scrollWindowToTop();
      }
    },
  });

  return header({ className: styles['header'] }, [
    div({ className: styles['container'] }, [logo, burgerButton.getNode(), navMenu.getNode()]),
  ]);
}
