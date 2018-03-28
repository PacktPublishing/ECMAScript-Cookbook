export function main() {

  console.log('Before promise created');

  const rocket = {};
  Promise.resolve(Math.random() > 0.5)
    .then(addBoosters)
    .then(() => console.log('Ready for launch: 🚀'))
    .catch(console.error)
    .then(() => console.log('Time to inform the press.'));

  console.log('After promise created');
}

function addBoosters(shouldFail) {
  if (shouldFail) {
    throw new Error('Unable to add Boosters');
  }

  return {
    boosters: [{
      count: 2,
      fuelType: 'solid'
    }, {
      count: 1,
      fuelType: 'liquid'
    }]
  };
}
