export function main() {

  console.log('Before promise created');

  const rocket = {};
  Promise.all([
    Promise.resolve(rocket).then(addBosters),
    Promise.resolve(rocket).then(performGuidanceDiagnostic),
    Promise.resolve(rocket).then(loadCargo)
  ]).then(function (results) {
    console.log('Rocket ready for launch');
    console.log(results);
  });


  console.log('After promise created');
}

function addBosters (rocket) {
  console.log('attaching boosters');
  rocket.boosters = [{
    count: 2,
    fuelType: 'solid'
  }, {
    count: 1,
    fuelType: 'liquid'
  }];
  return rocket; 
}

function performGuidanceDiagnostic (rocket) {
  console.log('performing guidance diagnostic');

  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('guidance diagnostic complete');
      rocket.guidanceDiagnostic = 'Completed';
      resolve(rocket);
    }, 2000);
  });
}

function loadCargo (rocket) {
  console.log('loading satellite');
  rocket.cargoBay = [{ name: 'Communication Satellite' }]
  return rocket;
}
  