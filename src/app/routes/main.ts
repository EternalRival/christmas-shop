import '~/assets/globals.css';
import AboutSection from '~/components/about-section';
import Header from '~/components/header';
import HeroSection from '~/components/hero-section';
import SliderSection from '~/components/slider-section';
import { main } from '~/utils/create-element';

console.log('Hello World!');

document.body.append(
  Header(),
  main(null, [HeroSection(), AboutSection(), SliderSection(), 'bestGifts', 'cta']),
  'footer',
);
