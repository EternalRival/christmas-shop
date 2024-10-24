import Header from '~/components/header';
import '~/assets/globals.css';
import { main } from '~/utils/create-element';
import Hero from '~/components/hero';

console.log('Hello World!');

document.body.append(Header(), main(null, [Hero(), 'about', 'slider', 'bestGifts', 'cta']), 'footer');
