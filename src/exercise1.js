const filter = function(items, iteratee, context) {
  const thisArg = context ? context : this;
  const values = [];
  const l = items.length;
  let i;
  for (i = 0, l; i < l; i++) {
    if (iteratee.call(thisArg, items[i], i, items)) {
      values.push(items[i]);
    }
  }
  return values;
};
const a = [1, 2, 3];
const filtered = filter(a, function(v) {
  return v === 2;
});
const result = filtered[0];
console.log(result);
