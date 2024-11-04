import clsx from 'clsx';
import ExploreButton from '~/components/explore-button';
import TimeUntilNewYear from '~/components/timer-until-new-year';
import { div, h2, p, section } from '~/utils/create-element';
import styles from './cta-section.module.css';

const HEADING_TEXT = 'Ready to start your journey to a better version of yourself?';
const TIMER_CAPTION_TEXT = 'The New Year is Coming Soon...';

export default function CTASection() {
  const timeUntilNewYear = new TimeUntilNewYear();

  return section({ className: styles['cta-section'] }, [
    div({ className: styles['container'] }, [
      div({ className: styles['container-inner'] }, [
        h2({ className: clsx(styles['heading'], 'text-header-2'), textContent: HEADING_TEXT }),
        ExploreButton(),
        div({ className: styles['timer-container'] }, [
          p({ className: 'text-caption', textContent: TIMER_CAPTION_TEXT }),
          timeUntilNewYear.getNode(),
        ]),
      ]),
    ]),
  ]);
}
