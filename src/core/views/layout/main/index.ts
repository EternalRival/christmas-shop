import { main } from '~/core/utils/create-element';
import styles from './main.module.css';

export default function Main({ content }: { content: Node[] }) {
  return main({ className: styles.main }, content);
}
