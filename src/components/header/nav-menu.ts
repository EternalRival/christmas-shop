import clsx from 'clsx';
import { a, li, nav, ul } from '~/utils/create-element';
import isCurrentRoute from '~/utils/is-current-route';
import styles from './header.module.css';

export default class NavMenu {
  private readonly node?: HTMLElement;

  constructor({
    linkList,
    onResize,
    onClose,
  }: { linkList?: { text: string; href: string }[]; onResize?: () => void; onClose?: () => void } = {}) {
    this.node =
      linkList &&
      nav({ className: styles['nav-menu'] }, [
        ul(
          { className: styles['nav-list'] },
          linkList.map(({ text, href }) =>
            li({ className: styles['nav-item'], onclick: onClose }, [
              a({
                className: clsx(styles['nav-link'], 'text-action-small'),
                ...(!isCurrentRoute(href) && { href }),
                text,
              }),
            ]),
          ),
        ),
      ]);

    if (onResize) {
      const node = this.getNode();

      if (!node) {
        throw new Error(`${NavMenu.name} node is not defined`);
      }

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(() => {
          onResize();
        });
      });

      resizeObserver.observe(node);
    }
  }

  public getNode(): Readonly<HTMLElement> | undefined {
    return this.node;
  }

  public isFullViewportWidth() {
    return this.getNode()?.clientWidth === document.documentElement.clientWidth;
  }
}
