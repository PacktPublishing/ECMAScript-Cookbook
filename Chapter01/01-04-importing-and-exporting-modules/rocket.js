export default name = "Saturn V";
export const COUNT_DOWN_DURATION = 10;


export function launch () {
  console.log(`Launching in ${COUNT_DOWN_DURATION}`);
  launchSequence();
}

function launchSequence () {
  let currCount = COUNT_DOWN_DURATION;

  const countDownInterval = setInterval(function () {
    currCount--;

    if (0 < currCount) {
      console.log(currCount);
    } else {
      console.log('LIFTOFF!!! 🚀');
      clearInterval(countDownInterval);
    }
  }, 1000);
}