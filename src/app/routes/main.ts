import '~/assets/globals.css';
import AboutSection from '~/components/about-section';
import BestGiftsSection from '~/components/best-gifts-section';
import Header from '~/components/header';
import HeroSection from '~/components/hero-section';
import SliderSection from '~/components/slider-section';
import { main } from '~/utils/create-element';
import GIFTS_DATA from '~/assets/json/gifts.json';

document.body.append(
  Header(),
  main(null, [HeroSection(), AboutSection(), SliderSection(), BestGiftsSection({ gifts: GIFTS_DATA }), 'cta']),
  'footer',
);
