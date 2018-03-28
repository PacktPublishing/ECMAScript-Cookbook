
export function main() {
  const obj = {
    method0: function() {
      console.log('Hello, from method one.')
    },
    method1() {
      console.log('Hello, from method one.')
    }
  };
  obj.method0();
  obj.method1();

  obj.method0 = () => console.log('Override of method 0.');
  obj.method1 = () => console.log('Override of method 1.');
  obj.method0();
  obj.method1();
}
