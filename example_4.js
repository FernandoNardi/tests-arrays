const list = [
  {
    id: 1,
    name: 'test_1',
    amount: 100
  },
  {
    id: 2,
    name: 'test_2',
    amount: 120.5
  },
  {
    id: 3,
    name: 'test_3',
    amount: 137
  },
  {
    id: 4,
    name: 'test_4',
    amount: 199
  }
]

const findByFieldRange = field => ([start, end], list) => list.filter(obj => obj[field] >= start && obj[field] <= end);

const findRangeByAmount = start => ({
  and: end => ({
    in: list => findByFieldRange('amount')([start, end], list)
  })
});

const result1 = findRangeByAmount(120).and(140).in(list);
const result2 = findRangeByAmount(140).and(199).in(list);

console.log(result1);
console.log(result2);
