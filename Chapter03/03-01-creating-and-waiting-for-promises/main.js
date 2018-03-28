export function main () {

  console.log('Before promise created');

  new Promise(function (resolve) {
    console.log('Executing promise');
    resolve();
  }).then(function () {
    console.log('Finished promise');
  });

  console.log('After promise created');
}