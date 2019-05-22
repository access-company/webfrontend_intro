const filter = function(items, iteratee, context) {
  const thisArg = context ? context : this;
  const values = [];
  let i;
    const l = items.length;
  for ( i = 0; i < l; i++) {
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
const b = filtered[0];
console.log(b);
