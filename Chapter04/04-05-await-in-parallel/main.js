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
  const enginePromise = checkEngines();
  const flighPlanPromise = checkFlightPlan(0.5);
  const navSystemPromise = checkNavigationSystem(0.75);

  const enginesOk = await enginePromise;
  const flighPlanOk = await flighPlanPromise;
  const navigationOk = await navSystemPromise;

  if (enginesOk && flighPlanOk && navigationOk) {
    console.log('All systems go, ready to launch: 🚀');
  } else {
    console.error('Abort the launch: 🛑');

    if (!enginesOk) {
      console.error('engines not ready');
    }

    if (flighPlanOk) {
      console.error('error found in flight plan');
    }

    if (navigationOk) {
      console.error('error found in navigation systems');
    }
  }
}
