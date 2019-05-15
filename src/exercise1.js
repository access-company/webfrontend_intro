var filter = function(items, iteratee, context) {
  var thisArg = context ? context : this;
  var values = [];
  var i, l;
  for (i = 0, l = items.length; i < l; i++) {
    if (iteratee.call(thisArg, items[i], i, items)) {
      values.push(items[i]);
    }
  }
  return values;
};
var a = [1, 2, 3];
var filtered = filter(a, function(v) {
  return v === 2;
});
var a = filtered[0];
console.log(a);
