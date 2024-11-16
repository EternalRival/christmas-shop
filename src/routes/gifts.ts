import Icon from '~/assets/icons';
import '~/assets/styles/globals.css';
import SVGIcon from '~/core/components/svg-icon';
import getGiftsData from '~/core/utils/get-gifts-data';
import printAssignmentLink from '~/core/utils/print-assignment-link';
import Layout from '~/core/views/layout';
import BackToTopButton from '~/modules/gifts-section/components/back-to-top-button';
import GiftsSection from '~/modules/gifts-section/views/gifts-sections';

printAssignmentLink();

const backToTopButton = new BackToTopButton({ icon: SVGIcon({ name: Icon.ARROW_UP }) });

document.body.append(...Layout({ mainContent: [GiftsSection({ gifts: getGiftsData() }), backToTopButton.getNode()] }));
