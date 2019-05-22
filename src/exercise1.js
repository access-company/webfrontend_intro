const filter = function(items, iteratee, context) {
  const thisArg = context ? context : this;
  const values = [];
  const l = items.length;
  for (let i = 0; i < l; i++) {
    if (iteratee.call(thisArg, items[i], i, items)) {
      values.push(items[i]);
    }
  }
  return values;
};

const a = [1, 2, 3];
const filtered = filter(a, v => v === 2);
const a0 = filtered[0];
console.log(a0);
