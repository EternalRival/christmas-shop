const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

export default function parseTimeFromMilliseconds(ms: number) {
  const days = Math.floor(ms / MS_IN_DAY);
  const hours = Math.floor((ms / MS_IN_HOUR) % 24);
  const minutes = Math.floor((ms / MS_IN_MINUTE) % 60);
  const seconds = Math.floor((ms / MS_IN_SECOND) % 60);

  return { days, hours, minutes, seconds };
}
