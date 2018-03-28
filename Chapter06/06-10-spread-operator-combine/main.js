
export function main() {
  const object1 = {
    prop1: 'some value',
    prop2: 'some other value',
  }
  const object2 = {
    prop2: 'some overriding value',
    objectProp: { foo: 'bar' }
  }
  const anotherProp = Math.random();

  const combinedObject = { ...object1, ...object2, anotherProp };
  console.log(combinedObject);
}
