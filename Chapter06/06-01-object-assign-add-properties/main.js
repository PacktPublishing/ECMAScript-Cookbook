
export function main() {
  const object = {};
  const otherObject = {
    foo: 'original value',
    bar: 'another value'
  }

  Object.assign(object, otherObject, {
    foo: 'override value'
  });

  console.log(object);
}
