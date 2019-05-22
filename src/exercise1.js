let filter = function(items, iteratee, context) {
　let thisArg = context ? context : this;
  let values = [];
  let i, l;
  for (i = 0, l = items.length; i < l; i++) {
    if (iteratee.call(thisArg, items[i], i, items)) {
      values.push(items[i]);
    }
  }
  return values;
};
let a = [1, 2, 3];
let filtered = filter(a, function(v) {
  return v === 2;
});
a = filtered[0];
console.log(a);
