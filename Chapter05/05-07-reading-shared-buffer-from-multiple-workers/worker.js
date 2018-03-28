const global = this;
let sharedIntArray;
let sharedIntArraySlice;
let workerIndex;
let workerCount;
let startIndex;
let endIndex;

global.onmessage = (message) => {
  const { data } = message;

  switch (data.type) {
    case 'load-array':
      sharedIntArray = new Int32Array(message.data.array);
    case 'load-indices':
      workerIndex = data.workerIndex;
      workerCount = data.workerCount;

      const windowSize = Math.floor(sharedIntArray.length / workerCount)
      startIndex = windowSize * workerIndex;
      const isLastWorker = workerIndex === workerCount - 1;
      endIndex = (isLastWorker) ? sharedIntArray.length : startIndex + windowSize;
      sharedIntArraySlice = sharedIntArray.slice(startIndex, endIndex);
      break;

    case 'calculate-sum':
      const sum = sharedIntArraySlice.reduce((acc, number) =>
        acc + number
      , 0);
      sendResult('sum', sum);
      break;

    case 'calculate-average':
      const total = sharedIntArraySlice.reduce((acc, number) =>
        acc + number
      , 0);
      const average = total / sharedIntArraySlice.length
      sendResult('average', average);
      break;
  }
};

function sendResult(type, result) {
  global.postMessage({
    type,
    result,
    workerIndex,
    startIndex,
    endIndex,
    windowSize: endIndex - startIndex - 1
  });
}
