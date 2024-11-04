import '~/assets/globals.css';
import GIFTS_DATA from '~/assets/json/gifts.json';
import Footer from '~/components/footer';
import GiftsSection from '~/components/gifts-section';
import Header from '~/components/header';
import { main } from '~/utils/create-element';
import { Route } from './route.enum';
import { WidgetId } from './widget-id.enum';
import BackToTopButton from '~/components/back-to-top-button';

const backToTopButton = new BackToTopButton();

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
  main(null, [GiftsSection({ gifts: GIFTS_DATA }), backToTopButton.getNode()]),
  Footer({ widgetId: WidgetId.CONTACTS }),
);
