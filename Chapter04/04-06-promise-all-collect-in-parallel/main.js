function checkEngines() {
  console.log('checking engine');

  return new Promise(function (resolve) {
    setTimeout(function() {
      console.log('engine check completed');
      resolve(Math.random() < 0.9)
    }, 250)
  });
}

function checkFlightPlan() {
  console.log('checking flight plan');

  return new Promise(function (resolve) {
    setTimeout(function() {
      console.log('flight plan check completed');
      resolve(Math.random() < 0.9)
    }, 350)
  });
}

function checkNavigationSystem() {
  console.log('checking navigation system');

  return new Promise(function (resolve) {
    setTimeout(function() {
      console.log('navigation system check completed');
      resolve(Math.random() < 0.9)
    }, 450)
  });
}

export async function main() {
  const prelaunchChecks = [
    checkEngines(),
    checkFlightPlan(0.5),
    checkNavigationSystem(0.75)
  ];

  const checkResults = await Promise.all(prelaunchChecks);
  const readyToLaunch = checkResults.reduce((acc, curr) => acc && curr);

  if (readyToLaunch) {
    console.log('All systems go, ready to launch: 🚀');
  } else {
    console.error('Something went wrong, abort the launch: 🛑');
  }
}
