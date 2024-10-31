import '~/assets/globals.css';
import GIFTS_DATA from '~/assets/json/gifts.json';
import Footer from '~/components/footer';
import GiftsSection from '~/components/gifts-section';
import Header from '~/components/header';
import { main } from '~/utils/create-element';

document.body.append(Header(), main(null, [GiftsSection({ gifts: GIFTS_DATA })]), Footer());
