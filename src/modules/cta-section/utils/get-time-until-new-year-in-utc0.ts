export default function getTimeUntilNewYearInUTC0() {
  const now = new Date();

  const nowTime = now.getTime();
  const nextNewYearTime = Date.UTC(now.getUTCFullYear() + 1, 0, 1);

  return nextNewYearTime - nowTime;
}
