
export function main() {
  const object = {
    prop1: 'some value',
    prop2: 'some other value',
    objectProp: { foo: 'bar' }
  };

  const { prop1, prop2, objectProp } = object;
  console.log(prop1);
  console.log(prop2);
  console.log(objectProp);
}
