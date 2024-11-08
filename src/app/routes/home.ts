import '~/assets/globals.css';
import GIFTS_DATA from '~/assets/json/gifts.json';
import AboutSection from '~/components/about-section';
import BestGiftsSection from '~/components/best-gifts-section';
import CTASection from '~/components/cta-section';
import Footer from '~/components/footer';
import Header from '~/components/header';
import HeroSection from '~/components/hero-section';
import SliderSection from '~/components/slider-section';
import { main } from '~/utils/create-element';
import printAssignmentLink from '~/utils/print-assignment-link';
import { Route } from './route.enum';
import { WidgetId } from './widget-id.enum';

printAssignmentLink()

document.body.append(
  Header({
    logoUrl: Route.HOME,
    menuLinkList: [
      { text: 'gifts', href: Route.GIFTS },
      { text: 'about', href: `${Route.HOME}#${WidgetId.ABOUT}` },
      { text: 'best', href: `${Route.HOME}#${WidgetId.BEST_GIFTS}` },
      { text: 'contacts', href: `#${WidgetId.CONTACTS}` },
    ],
  }),
  main(null, [
    HeroSection(),
    AboutSection({ widgetId: WidgetId.ABOUT }),
    SliderSection(),
    BestGiftsSection({ gifts: GIFTS_DATA, widgetId: WidgetId.BEST_GIFTS }),
    CTASection(),
  ]),
  Footer({ widgetId: WidgetId.CONTACTS }),
);
