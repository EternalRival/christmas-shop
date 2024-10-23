import clsx from 'clsx';
import { createElement } from '~/utils/create-element';
import styles from './header.module.css';

export default function Header() {
  return createElement('header', { className: clsx('text-header-1', styles['header']) }, ['header']);
}
