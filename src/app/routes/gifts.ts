import '~/assets/globals.css';
import GIFTS_DATA from '~/assets/json/gifts.json';
import BackToTopButton from '~/components/back-to-top-button';
import Footer from '~/components/footer';
import GiftsSection from '~/components/gifts-section';
import Header from '~/components/header';
import { main } from '~/utils/create-element';
import printAssignmentLink from '~/utils/print-assignment-link';
import { Route } from './route.enum';
import styles from './home.module.css';
import { WidgetId } from './widget-id.enum';

printAssignmentLink();

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
  main({ className: styles['main'] }, [GiftsSection({ gifts: GIFTS_DATA }), backToTopButton.getNode()]),
  Footer({ widgetId: WidgetId.CONTACTS }),
);
