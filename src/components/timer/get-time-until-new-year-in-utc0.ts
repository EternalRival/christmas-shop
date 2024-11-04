export default function getTimeUntilNewYearInUTC0() {
  const now = new Date();

  const offset = now.getTimezoneOffset() * 60 * 1000;

  const nowTime = now.getTime() + offset;
  const nextNewYearTime = Date.UTC(now.getUTCFullYear() + 1, 0, 1);

  return nextNewYearTime - nowTime;
}
