const o = {
  a: 'a',
  b: 'b',
  c: 'c'
};
const o2 = Object.assign({}, o);
o.a = 'neew';
console.log(o2.a);
