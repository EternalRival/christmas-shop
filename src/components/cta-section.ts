import clsx from 'clsx';
import { div, h2, section } from '~/utils/create-element';
import styles from './cta-section.module.css';
import ExploreButton from './explore-button';
import Timer from './timer';

const HEADING_TEXT = 'Ready to start your journey to a better version of yourself?';
const TIMER_CAPTION_TEXT = 'The New Year is Coming Soon...';

export default function CTASection() {
  return section({ className: styles['cta-section'] }, [
    div({ className: styles['container'] }, [
      div({ className: styles['container-inner'] }, [
        h2({ className: clsx(styles['heading'], 'text-header-2'), textContent: HEADING_TEXT }),
        ExploreButton(),
        div({ className: styles['timer-container'] }, [
          div({ className: 'text-caption', textContent: TIMER_CAPTION_TEXT }),
          Timer({ days: '47', hours: '5', minutes: '34', seconds: '12' }),
        ]),
      ]),
    ]),
  ]);
}
