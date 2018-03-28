export function main() {

  console.log('Before promise created');

  const rocket = {};
  Promise.resolve(rocket).then(performGuidanceDiagnostic)
    .catch(console.error);
  Promise.resolve(rocket).then(addBosters)
    .catch(console.error);

  console.log('After promise created');
}

function addBosters (rocket) {
  throw new Error('Unable to add Boosters');
}

function performGuidanceDiagnostic (rocket) {
  return new Promise(function (resolve, reject) {
    reject(new Error('Unable to finish guidance diagnostic'));
  });
}
  