import clsx from 'clsx';
import { button, li, ul } from '~/utils/create-element';
import styles from './gifts-section.module.css';

export default class GiftTabList<TabName extends string> {
  private readonly node: HTMLUListElement;

  private readonly state: { currentTab: TabName | null } = { currentTab: null };

  private readonly onTabClick?: (newTab: TabName) => void;

  constructor({ tabNameList, onTabClick }: { tabNameList: TabName[]; onTabClick?: (newTab: TabName) => void }) {
    this.node = ul({ className: styles['tab-list'] }, this.createTabListItems({ tabNameList }));

    this.onTabClick = onTabClick;
  }

  public getNode() {
    return this.node;
  }

  private createTabListItems({ tabNameList }: { tabNameList: TabName[] }) {
    this.state.currentTab ??= tabNameList[0] ?? null;

    return tabNameList.map((name) =>
      li({ className: styles['tab-list-item'] }, [
        button({
          className: clsx(styles['tab-button'], 'text-action-small'),
          textContent: name,
          disabled: name === this.state.currentTab,
          onclick: () => {
            this.state.currentTab = name;
            this.getNode().replaceChildren(...this.createTabListItems({ tabNameList }));
            this.onTabClick?.(name);
          },
        }),
      ]),
    );
  }
}
