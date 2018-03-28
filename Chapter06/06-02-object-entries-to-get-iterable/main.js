
export function main() {
  const object = {
    foo: Math.random(),
    bar: Math.random()
  };
  for (let [prop, value] of Object.entries(object)) {
    console.log(prop, value);
  }
}
