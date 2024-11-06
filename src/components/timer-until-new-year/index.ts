import clsx from 'clsx';
import { div, span } from '~/utils/create-element';
import getTimeUntilNewYearInUTC0 from './get-time-until-new-year-in-utc0';
import parseTimeFromMilliseconds from './parse-time-from-milliseconds';
import styles from './timer-until-new-year.module.css';

const DAYS_TEXT = 'days';
const HOURS_TEXT = 'hours';
const MINUTES_TEXT = 'minutes';
const SECONDS_TEXT = 'seconds';

type ParsedTime = { days: number; hours: number; minutes: number; seconds: number };

function getParsedTimeUntilNewYear(): ParsedTime {
  return parseTimeFromMilliseconds(getTimeUntilNewYearInUTC0());
}

export default class TimeUntilNewYear {
  public node: HTMLElement;

  constructor() {
    this.node = div({ className: styles['timer'] }, this.create(getParsedTimeUntilNewYear()));

    this.initAutoUpdater({ delay: 1000 });
  }

  public getNode() {
    return this.node;
  }

  private create({ days, hours, minutes, seconds }: ParsedTime) {
    return [
      [days.toString(), DAYS_TEXT],
      [hours.toString(), HOURS_TEXT],
      [minutes.toString(), MINUTES_TEXT],
      [seconds.toString(), SECONDS_TEXT],
    ].map(([counter, label]) =>
      div({ className: styles['timer-item'] }, [
        span({ className: clsx(styles['timer-item-text'], 'text-header-2'), textContent: counter }),
        span({ className: clsx(styles['timer-item-text'], 'text-header-4'), textContent: label }),
      ]),
    );
  }

  private update({ newTime }: { newTime: ParsedTime }) {
    this.getNode().replaceChildren(...this.create(newTime));
  }

  private initAutoUpdater({ delay }: { delay: number }) {
    setInterval(() => {
      this.update({ newTime: getParsedTimeUntilNewYear() });
    }, delay);
  }
}
