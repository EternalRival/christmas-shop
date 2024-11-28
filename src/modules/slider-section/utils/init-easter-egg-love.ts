export default async function initEasterEggLove() {
  const { div, span } = await import('~/core/utils/create-element');
  const { sliderContainer } = (await import('../views/slider-section.module.css')).default;

  const loveSpan = document.querySelector(`.${sliderContainer} > span:nth-child(5)`);

  if (!loveSpan) return;

  const love = div({ className: loveSpan.className });
  const l = span({ textContent: 'l' });
  const o = span({ textContent: 'o' });
  const v = span({ textContent: 'v' });
  const e = span({ textContent: 'e' });

  const DURATION = '600ms';

  love.style.cursor = 'pointer';
  love.style.letterSpacing = '-0.0125em';
  love.style.textWrap = 'nowrap';
  love.style.transitionDuration = DURATION;

  [l, o, v, e].forEach((span) => {
    span.style.display = 'inline-block';
    span.style.transitionDuration = DURATION;
  });

  love.addEventListener('pointerover', (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return;

    l.style.transform = 'translateX(369%) scaleY(-1)';
    o.style.transform = 'translateX(-69%) scaleY(1)';
    v.style.transform = 'translateX(-81%) scaleY(-1)';
    e.style.transform = 'translateX(-88%) scaleY(1)';

    [l, o, v, e].forEach((span) => {
      span.style.textShadow =
        '0 0 .05em var(--color-tag-pink), 0 0 .1em var(--color-tag-pink), 0 0 .2em var(--color-tag-pink)';
    });

    love.addEventListener('pointerout', () => {
      [l, o, v, e].forEach((span) => {
        span.style.transform = '';
        span.style.textShadow = '';
      });
    });
  });

  love.replaceChildren(l, o, v, e);
  loveSpan.replaceWith(love);
}
