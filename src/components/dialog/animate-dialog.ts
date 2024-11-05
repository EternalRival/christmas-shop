const FADE_IN = {
  keyframes: [
    { opacity: 0, pointerEvents: 'none' },
    { opacity: 1, pointerEvents: 'none' },
  ],
  options: { duration: 250, easing: 'ease-in-out' },
};

const FADE_OUT = {
  keyframes: [
    { opacity: 1, pointerEvents: 'none' },
    { opacity: 0, pointerEvents: 'none' },
  ],
  options: { duration: 150, easing: 'ease-in-out' },
};

export default async function animateDialog(dialog: HTMLDialogElement, direction?: 'in' | 'out') {
  const { keyframes, options } = direction === 'in' ? FADE_IN : FADE_OUT;

  const animations = [
    dialog.animate(keyframes, options),
    dialog.animate(keyframes, { ...options, pseudoElement: '::backdrop' }),
  ];

  await Promise.all(animations.map(({ finished }) => finished));
}
