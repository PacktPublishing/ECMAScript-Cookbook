
export function main() {
  const obj1 = {};
  const obj2 = {};

  console.log('obj1 === obj2', obj1 === obj2);
  console.log('obj1 is obj2', Object.is(obj1, obj2));
  console.log('obj2 === obj2', obj2 === obj2);
  console.log('obj2 is obj2', Object.is(obj2, obj2));
  console.log('undefined === undefined', undefined === undefined);
  console.log('undefined is undefined', Object.is(undefined, undefined));
  console.log('null === undefined', null === undefined);
  console.log('null is undefined', Object.is(null, undefined));

  // Special cases (from MDN documentation)
  console.log('Special Cases:');
  console.log('0 === -0', 0 === -0);
  console.log('0 is -0', Object.is(0, -0));
  console.log('-0 === -0', -0 === -0);
  console.log('-0 is -0', Object.is(-0, -0));
  console.log('NaN === NaN', NaN === NaN);
  console.log('NaN is NaN', Object.is(NaN, NaN));
}
