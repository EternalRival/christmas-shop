import { div } from '~/utils/create-element';
import styles from './timer.module.css';

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
  return div({ className: styles['timer'] }, [
    div(null, [
      div({ className: 'text-header-2', textContent: days }),
      div({ className: 'text-header-4', textContent: DAYS_TEXT }),
    ]),
    div(null, [
      div({ className: 'text-header-2', textContent: hours }),
      div({ className: 'text-header-4', textContent: HOURS_TEXT }),
    ]),
    div(null, [
      div({ className: 'text-header-2', textContent: minutes }),
      div({ className: 'text-header-4', textContent: MINUTES_TEXT }),
    ]),
    div(null, [
      div({ className: 'text-header-2', textContent: seconds }),
      div({ className: 'text-header-4', textContent: SECONDS_TEXT }),
    ]),
  ]);
}
