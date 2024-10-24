import Header from '~/components/header';
import '~/assets/globals.css';

console.log('Hello World!');

const header = Header();
const hero = Header();
const about = Header();
const slider = Header();
const bestGifts = Header();
const cta = Header();
const footer = Header();

document.body.append(header, hero, about, slider, bestGifts, cta, footer);
