import { Route } from '~/routes/route.enum';
import { WidgetId } from '~/routes/widget-id.enum';
import Footer from './footer';
import Header from './header';
import Main from './main';

export default function Layout({ mainContent }: { mainContent: Node[] }) {
  return [
    Header({
      logoUrl: Route.HOME,
      menuLinkList: [
        { text: 'gifts', href: Route.GIFTS },
        { text: 'about', href: `${Route.HOME}#${WidgetId.ABOUT}` },
        { text: 'best', href: `${Route.HOME}#${WidgetId.BEST_GIFTS}` },
        { text: 'contacts', href: `#${WidgetId.CONTACTS}` },
      ],
    }),
    Main({ content: mainContent }),
    Footer({ widgetId: WidgetId.CONTACTS }),
  ];
}
