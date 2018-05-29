const list = [
  {
    id: 1,
    name: 'test_1',
    email: 'test_1@gmail.com'
  },
  {
    id: 2,
    name: 'test_2',
    email: 'test_2@testmail.com'
  },
  {
    id: 3,
    name: 'test_3',
    email: 'test_3@testmail.com'
  },
  {
    id: 4,
    name: 'test_4',
    email: 'test_4@testmail.com'
  },
  {
    id: 5,
    name: 'test_5',
    email: 'test_5@gmail.com'
  }
]

const findByFieldRegex = field => (regex, list) => list.filter(obj => obj[field].match(regex));

const findBy = field => ({
  [field]: value => ({
    in: list => findByFieldRegex(field)(value, list)
  }),
  searchingFor: value => ({
    in: list => findByFieldRegex(field)(value, list)
  })
});

const result1 = findBy('email').email(/@gmail.com/gi).in(list);
const result2 = findBy('email').searchingFor(/@testmail.com/gi).in(list);

console.log('gmail: ', result1);
console.log('testmail: ', result2);
