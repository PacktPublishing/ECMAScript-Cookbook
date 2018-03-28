// main.js
async function getRandomNumber() {
  console.log('Getting random number.');
  return Math.random();
}

async function deteremineReadyToLaunch(percentage) {
  console.log('Determining Ready to launch.');
  return Math.random() > 0.5;
}

async function reportResults(isReadyToLaunch) {
  if (isReadyToLaunch) {
    console.log('Rocket ready to launch. Initiate countdown: 🚀');
  } else {
    console.error('Rocket not ready. Abort mission: 🛑');
  }
}

export function main() {
  console.log('Before promise created');
  getRandomNumber()
    .then(deteremineReadyToLaunch)
    .then(reportResults)
  console.log('After promise created');

  Promise.all([
    checkEngines(),
    checkFlightPlan(0.5),
    checkNavigationSystem(0.75)
  ]).then(function([enginesOk, flighPlanOk, navigationOk]) {
    if (enginesOk) {
      console.log('engines ready to go');
    } else {
      console.error('engines not ready');
    }

    if (flighPlanOk) {
      console.log('flight plan good to go');
    } else {
      console.error('error found in flight plan');
    }

    if (navigationOk) {
      console.log('navigation systems good to go');
    } else {
      console.error('error found in navigation systems');
    }
  })
}

async function checkEngines(threshold = 0.9) {
  return Math.random() < threshold;
}

async function checkFlightPlan(threshold = 0.9) {
  return Math.random() < threshold;
}

async function checkNavigationSystem(threshold = 0.9) {
  return Math.random() < threshold;
}