
export function main() {
  const obj = {};

  Object.defineProperty(obj, 'prop1',{
    writable: false,
    configurable: true,
    value: Math.random()
  });
  console.log(obj.prop1);

  Object.defineProperty(obj, 'prop1',{
    writable: false,
    configurable: false,
    value: Math.random()
  });
  console.log(obj.prop1)

  // throws error
  Object.defineProperty(obj, 'prop1',{
    value: Math.random()
  });
  console.log(obj.prop1)
}
