const isOver = min => value => min < value;

const isBelow = max => value => max > value;

const isInRange = (min, max) => value => isOver(min)(value) && isBelow(max)(value);

const getBy = predicate => (fn, values) => list => list.filter(fn(predicate)(...values));

module.exports = {
  getBy,
  isOver,
  isBelow,
  isInRange
};
