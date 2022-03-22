const periods = [
  { time: 1000, unit: 'second' },
  { time: 60, unit: 'second' },
  { time: 60, unit: 'minute' },
  { time: 24, unit: 'hour' },
  { time: 24, unit: 'day' },
  { time: 30, unit: 'month' },
  { time: 12, unit: 'year' },
];

const periodBetweenDate = (oldDate: string) => {
  const lastUpdated = Date.parse(oldDate);
  let dateDiff = Date.now() - lastUpdated;
  let timeUnit = 'milisecond';

  periods.forEach((period) => {
    if (dateDiff > period.time) {
      dateDiff = Math.floor(dateDiff / period.time);
      timeUnit = period.unit;
    }
  });

  if (dateDiff !== 1) timeUnit += 's';
  return [dateDiff, timeUnit];
};

export default periodBetweenDate;
