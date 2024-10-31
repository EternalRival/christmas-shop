import { button } from '~/utils/create-element';

const styles = { fab: '' };

export default function FAB() {
  return button({ className: styles['fab'] }, ['🡡']);
}
