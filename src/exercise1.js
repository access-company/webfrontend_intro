var filter = function(items, iteratee, context) {
  const thisArg = context ? context : this;
  const l = items.length
  let values = [];
  for (let i = 0; i < items.length; i++) {
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
console.log(filtered[0]);
