export function main() {

  console.log('Before promise created');

  Promise.resolve({})
    .then(function (rocket) {
      console.log('attaching boosters');
      rocket.boosters = [{
        count: 2,
        fuelType: 'solid'
      }, {
        count: 1,
        fuelType: 'liquid'
      }];
      return rocket;
    })
    .then(function (rocket) {
      console.log('boosters attached');
      console.log(rocket);
    })


  console.log('After promise created');
}
  