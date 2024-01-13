export default function cleanSet(set, startString) {
  const RetString = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  set.forEach((str) => {
    if (str.startsWith(startString)) {
      RetString.push(str.slice(startString.length));
    }
  });
  return RetString.join('-');
}
