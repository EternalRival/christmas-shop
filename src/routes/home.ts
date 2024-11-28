import '~/assets/styles/globals.css';
import getGiftsData from '~/core/utils/get-gifts-data';
import printAssignmentLink from '~/core/utils/print-assignment-link';
import Layout from '~/core/views/layout';
import AboutSection from '~/modules/about-section/views/about-section';
import BestGiftsSection from '~/modules/best-gifts-section/views/best-gifts-section';
import CTASection from '~/modules/cta-section/views/cta-section';
import HeroSection from '~/modules/hero-section/views/hero-section';
import initEasterEggLove from '~/modules/slider-section/utils/init-easter-egg-love';
import SliderSection from '~/modules/slider-section/views/slider-section';
import { WidgetId } from './widget-id.enum';

document.body.append(
  ...Layout({
    mainContent: [
      HeroSection(),
      AboutSection({ widgetId: WidgetId.ABOUT }),
      SliderSection(),
      BestGiftsSection({ gifts: getGiftsData(), widgetId: WidgetId.BEST_GIFTS }),
      CTASection(),
    ],
  }),
);

printAssignmentLink();

initEasterEggLove();
