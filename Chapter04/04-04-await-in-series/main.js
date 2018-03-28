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

export async function main() {
  const randomNumber = await getRandomNumber()
  const ready = await deteremineReadyToLaunch(randomNumber)
  await reportResults(ready);
}
