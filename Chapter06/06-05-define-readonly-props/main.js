
export function main() {
  const obj = {};

  Object.defineProperty(obj, 'method1',{
    writable: false,
    value: () => {
      console.log('Hello, from method one.')
    }
  });
  obj.method1();

  obj.method1 = () => console.log('Override of method 1.');
}
