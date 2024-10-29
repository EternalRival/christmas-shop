import { div, p } from '~/utils/create-element';
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
      p({ className: 'text-header-2', textContent: days }),
      p({ className: 'text-header-4', textContent: DAYS_TEXT }),
    ]),
    div(null, [
      p({ className: 'text-header-2', textContent: hours }),
      p({ className: 'text-header-4', textContent: HOURS_TEXT }),
    ]),
    div(null, [
      p({ className: 'text-header-2', textContent: minutes }),
      p({ className: 'text-header-4', textContent: MINUTES_TEXT }),
    ]),
    div(null, [
      p({ className: 'text-header-2', textContent: seconds }),
      p({ className: 'text-header-4', textContent: SECONDS_TEXT }),
    ]),
  ]);
}
