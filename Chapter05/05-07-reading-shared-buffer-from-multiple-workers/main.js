function onMessage(message) {
  const {
    type,
    result,
    workerIndex,
    startIndex,
    endIndex,
    windowSize
  } = message.data;

  console.log(`Result from worker operation {
    type: ${type},
    result: ${result},
    workerIndex: ${workerIndex},
    startIndex: ${startIndex},
    endIndex: ${endIndex},
    windowSize: ${windowSize}
  }`);
}

export function main() {
  console.log('Main function starting.');
  const NUM_COUNT = 2048;
  const BYTES_FOR_32_BIT = 4;
  const ARRAY_SIZE = NUM_COUNT * BYTES_FOR_32_BIT;
  const MAX_NUMBER = 32;
  const WORKER_COUNT = 10;

  // create workers
  let workers = [];

  console.log('Creating workers.');
  for (let i = 0; i < WORKER_COUNT; i++) {
    const worker = new Worker('./worker.js');
    worker.onmessage = onMessage;
    workers = workers.concat(worker)
  }

  // create buffer and add data
  const sab = new SharedArrayBuffer(ARRAY_SIZE);
  const intBuffer = new Int32Array(sab);

  // fill with random numbers
  console.log('Filling Int buffer');
  intBuffer.forEach((value, index) => {
    intBuffer[index] = (Math.random() * MAX_NUMBER) + 1;
  });

  workers.forEach((worker, workerIndex) => {
    worker.postMessage({ type: 'load-array', array: sab });
    worker.postMessage({ type: 'load-indices', workerIndex, workerCount: WORKER_COUNT });
    worker.postMessage({ type: 'calculate-sum' });
    worker.postMessage({ type: 'calculate-average' });
  });
}

