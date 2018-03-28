export function main() {

  console.log('Before promise created');

  new Promise(function (resolve, reject) {
    reject(new Error('Something went wrong'));
    resolve();
  }).then(function (result) {
    console.log('Promise Completed');
  }).catch(function (error) {
    console.error(error);
  });


  console.log('After promise created');
}
  