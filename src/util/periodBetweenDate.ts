const periods = [
  { time: 1000, unit: 'second' },
  { time: 60, unit: 'minute' },
  { time: 60, unit: 'hour' },
  { time: 24, unit: 'day' },
  { time: 30, unit: 'month' },
  { time: 12, unit: 'year' },
];

const periodBetweenDate = (oldDate: string) => {
  const lastUpdated = Date.parse(oldDate);
  let dateDiff = Date.now() - lastUpdated;
  let timeUnit = 'milisecond';

  periods.some((period) => {
    if (!(dateDiff > period.time)) return true;
    dateDiff = Math.round(dateDiff / period.time);
    timeUnit = period.unit;
    return false;
  });

  if (dateDiff !== 1) timeUnit += 's';
  return [dateDiff, timeUnit];
};

export default periodBetweenDate;
