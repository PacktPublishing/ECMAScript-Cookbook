export function main () {
  
    console.log('Before promise created');
  
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(Math.random());
      }, 5000);
    }).then(function (result) {
      console.log('Long running job returned: %s', result);
    });
  
    console.log('After promise created');
  }
  