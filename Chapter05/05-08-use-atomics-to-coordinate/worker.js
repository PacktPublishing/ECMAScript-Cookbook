let sharedIntArray;
let resultArray;
let unsafeResultArray;
let sharedIntArraySlice;

const global = this;

global.onmessage = (message) => {
  const { data } = message;

  switch (data.type) {
    case 'load-shared-input':
      sharedIntArray = new Int32Array(data.input);
      break;
    case 'load-shared-output':
      resultArray = new Int32Array(data.safe);
      unsafeResultArray = new Int32Array(data.unsafe);
      break;

    case 'load-indices':
      const { workerIndex, workerCount } = data;
      const windowSize = Math.floor(sharedIntArray.length / workerCount)
      const startIndex = windowSize * workerIndex;
      const lastWorker = workerIndex === workerCount - 1;
      const endIndex = (lastWorker) ? sharedIntArray.length : startIndex + windowSize;
      sharedIntArraySlice = sharedIntArray.slice(startIndex, endIndex);
      break;

    case 'calculate-sum':
      const sum = sharedIntArraySlice.reduce((acc, number) => acc + number, 0);
      unsafeResultArray[0] += sum;
      Atomics.add(resultArray, 0, sum);
      global.postMessage({ type: 'sum' });
      break;
  }
}
