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

document.body.append(
  Header(),
  main(null, [HeroSection(), AboutSection(), SliderSection(), BestGiftsSection({ gifts: GIFTS_DATA }), CTASection()]),
  Footer(),
);
