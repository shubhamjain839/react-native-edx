const o = new Object();
o.firstName = 'Shubham';
o.lastName = 'Jain';
o.isStudent = true;
o.greet = function () {
  console.log('hii');
};

const o1 = {};
o1.firstName = 'Shubham';
o1.lastName = 'Jain';
o1.isStudent = true;
o1.greet = function () {
  console.log('hii');
};
console.log(o1);
const o2 = {
  first: 'Shubham',
  last: 'Jain'
};
