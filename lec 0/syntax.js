const firstName = 'Shubham';
const ar = [
  'hello',
  43,
  function () {
    console.log('hi');
  }
];
ar[2]();
for (let index = 0; index < ar.length; index++) {
  console.log(ar[index]);
}
