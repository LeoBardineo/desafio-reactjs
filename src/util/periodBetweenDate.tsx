const periodBetweenDate = (a: string, b: string) => {
  const lastUpdated = Math.max(Date.parse(a), Date.parse(b));
  let dateDiff = Math.floor((Date.now() - lastUpdated) / 8.64e7);
  let period = dateDiff === 1 ? 'day' : 'days';
  if (dateDiff >= 30) {
    dateDiff = Math.floor(dateDiff / 30);
    period = dateDiff === 1 ? 'month' : 'months';
  }
  if (dateDiff >= 12) {
    dateDiff = Math.floor(dateDiff / 12);
    period = dateDiff === 1 ? 'year' : 'years';
  }
  return [dateDiff, period];
};

export default periodBetweenDate;
