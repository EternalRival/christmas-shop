import { div, span } from '~/utils/create-element';
import styles from './timer.module.css';
import clsx from 'clsx';

const DAYS_TEXT = 'days';
const HOURS_TEXT = 'hours';
const MINUTES_TEXT = 'minutes';
const SECONDS_TEXT = 'seconds';

export default function Timer({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}) {
  return div(
    { className: styles['timer'] },
    [
      [days, DAYS_TEXT],
      [hours, HOURS_TEXT],
      [minutes, MINUTES_TEXT],
      [seconds, SECONDS_TEXT],
    ].map(([counter, label]) =>
      div({ className: styles['timer-item'] }, [
        span({ className: clsx(styles['timer-item-text'], 'text-header-2'), textContent: counter }),
        span({ className: clsx(styles['timer-item-text'], 'text-header-4'), textContent: label }),
      ]),
    ),
  );
}
