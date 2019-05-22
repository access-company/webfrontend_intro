const a = [1, 2, 3, 2];
const filtered = ((items, iteratee, context) => {
  const thisArg = context ? context : this;
  return items.filter((item, i, array) => iteratee.call(thisArg, item, i, array));
})(a, v => v === 2);
console.log(filtered[0]);
