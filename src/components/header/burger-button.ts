import { button, span } from '~/utils/create-element';
import styles from './header.module.css';

export default class BurgerButton {
  private readonly node: HTMLButtonElement;

  private readonly state = { isOpen: false };

  private readonly onChangeOpenState?: (newState: boolean) => void;

  constructor({ onChangeOpenState }: { onChangeOpenState?: (newState: boolean) => void } = {}) {
    this.node = button(
      {
        className: styles['burger'],
        onclick: () => {
          this.toggleOpen();
        },
      },
      [span({ className: 'sr-only', textContent: 'navigation menu' })],
    );

    this.onChangeOpenState = onChangeOpenState;
  }

  private toggleOpenClassName(): void {
    if ('open' in styles) {
      this.node.classList.toggle(styles['open'], this.isOpen());
    }
  }

  public getNode(): Readonly<HTMLButtonElement> {
    return this.node;
  }

  public isOpen(): boolean {
    return this.state.isOpen;
  }

  public toggleOpen(force?: boolean): void {
    this.state.isOpen = force ?? !this.isOpen();

    this.onChangeOpenState?.(this.isOpen());

    this.toggleOpenClassName();
  }
}
