const o = {
  a: 'a',
  b: 'b'
};
const o2 = Object.assign({}, o);
o.a = 'neew';
console.log(o2.a);
