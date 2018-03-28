export function launchSequence (countDownDuration, name) {
  let currCount = countDownDuration;
  console.log(`Launching in ${countDownDuration}`, name);

  const countDownInterval = setInterval(function () {
    currCount--;

    if (0 < currCount) {
      console.log(currCount);
    } else {
      console.log('%s LIFTOFF!!! 🚀', name);
      clearInterval(countDownInterval);
    }
  }, 1000);
}