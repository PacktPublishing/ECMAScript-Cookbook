function checkEngines() {
  console.log('checking engine');

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        reject(new Error('Engine check failed'));
      } else {
        console.log('Engine check completed');
        resolve();
      }
    }, 250)
  });
}

function checkFlightPlan() {
  console.log('checking flight plan');

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.5) {
        reject(new Error('Flight plan check failed'));
      } else {
        console.log('Flight plan check completed');
        resolve();
      }
    }, 350)
  });
}

function checkNavigationSystem() {
  console.log('checking navigation system');

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.5) {
        reject(new Error('Navigation system check failed'));
      } else {
        console.log('Navigation system check completed');
        resolve();
      }
    }, 450)
  });
}

async function performChecks() {
  console.log('Starting Pre-Launch Checks');
  try {
    await Promise.all([
      checkEngines(),
      checkFlightPlan(),
      checkNavigationSystem()
    ]);
  } finally {
    console.log('Completed Pre-Launch Checks');
  }
}

export async function main() {
  try {
    await performChecks();
    console.log('All systems go, ready to launch: 🚀');
  } catch (e) {
    console.error('Aborting launch: 🛑');
    console.error(e);
  }
}