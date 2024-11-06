import { button } from '~/utils/create-element';
import styles from './header.module.css';

const BURGER_BUTTON_LABEL = 'navigation menu';

export default class BurgerButton {
  private readonly node: HTMLButtonElement;

  private readonly state = { isOpen: false };

  private readonly onChangeOpenState?: (newState: boolean) => void;

  constructor({ onChangeOpenState }: { onChangeOpenState?: (newState: boolean) => void } = {}) {
    this.node = button({
      className: styles['burger'],
      onclick: () => {
        this.toggleOpen();
      },
      ariaLabel: BURGER_BUTTON_LABEL,
    });

    this.onChangeOpenState = onChangeOpenState;
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

  private toggleOpenClassName(): void {
    if ('open' in styles) {
      this.getNode().classList.toggle(styles['open'], this.isOpen());
    }
  }
}
