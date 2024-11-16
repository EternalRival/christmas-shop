import clsx from 'clsx';
import ExploreButton from '~/core/components/explore-button';
import { div, h2, p, section } from '~/core/utils/create-element';
import TimeUntilNewYear from '../components/timer-until-new-year';
import styles from './cta-section.module.css';

const HEADING_TEXT = 'Ready to start your journey to a better version of yourself?';
const TIMER_CAPTION_TEXT = 'The New Year is Coming Soon...';

export default function CTASection() {
  const timeUntilNewYear = new TimeUntilNewYear();

  return section({ className: styles.ctaSection }, [
    div({ className: styles.container }, [
      div({ className: styles.containerInner }, [
        h2({ className: clsx(styles.heading, 'text-header-2'), textContent: HEADING_TEXT }),
        ExploreButton(),
        div({ className: styles.timerContainer }, [
          p({ className: 'text-caption', textContent: TIMER_CAPTION_TEXT }),
          timeUntilNewYear.getNode(),
        ]),
      ]),
    ]),
  ]);
}
