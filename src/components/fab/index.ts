import { button } from '~/utils/create-element';
import SVGIcon from '../svg-icon';
import { Icon } from '~/assets/icons/icon.enum';

const styles = { fab: '' };

export default function FAB() {
  return button({ className: styles['fab'] }, [SVGIcon({ name: Icon.ARROW_UP })]);
}
