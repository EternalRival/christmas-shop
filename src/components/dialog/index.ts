import { dialog } from '~/utils/create-element';
import animateDialog from './animate-dialog';

export default class Dialog {
  private readonly node: HTMLDialogElement;

  constructor(...[dialogProps, children]: Parameters<typeof dialog>) {
    this.node = dialog(
      {
        oncancel: this.handleDialogCancel,
        onclick: this.handleDialogClick,
        ...dialogProps,
      },
      children,
    );
  }

  protected async closeDialog(returnValue?: string) {
    await animateDialog(this.getNode(), 'out');
    this.getNode().close(returnValue);
    this.getNode().remove();
  }

  protected handleDialogCancel: HTMLDialogElement['oncancel'] = (event) => {
    event.preventDefault();
    this.closeDialog('cancel').catch(console.error);
  };

  protected handleDialogClick: HTMLDialogElement['onclick'] = (event) => {
    if (event.target === event.currentTarget) {
      this.closeDialog('cancel').catch(console.error);
    }
  };

  public getNode() {
    return this.node;
  }

  public async openDialog() {
    this.getNode().showModal();
    await animateDialog(this.getNode(), 'in');
  }
}
