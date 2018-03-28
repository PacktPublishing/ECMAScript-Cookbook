const NUMBER_COUNT = Math.pow(2, 10);
const BYTES_FOR_32_BIT = 4;
const ARRAY_SIZE = NUMBER_COUNT * BYTES_FOR_32_BIT;
const sab = new SharedArrayBuffer(ARRAY_SIZE);
const intBuffer = new Int32Array(sab);
const outSab = new SharedArrayBuffer(BYTES_FOR_32_BIT);
const unsafeSab = new SharedArrayBuffer(BYTES_FOR_32_BIT);
const WORKER_COUNT = 256;

let workersFinishedCount = 0;

function onMessage(message) {
  workersFinishedCount++;

  if (workersFinishedCount === WORKER_COUNT) {
    const outIntBuffer = new Int32Array(outSab);
    const unsafeIntBuffer = new Int32Array(unsafeSab);
    console.log('Unsafe Sum: %s', unsafeIntBuffer[0]);
    console.log('Safe sum: %s', outIntBuffer[0]);
    const localSum = intBuffer.reduce((acc, curr) => acc + curr, 0);
    console.log('Local sum: %s', localSum);
  }
}

export function main() {
  const MAX_NUMBER = 32;
  console.log('Main function starting.');

  // create workers
  let workers = [];

  console.log('Creating workers.');
  for (let i = 0; i < WORKER_COUNT; i++) {
    const worker = new Worker('./worker.js');
    worker.onmessage = onMessage;
    workers = workers.concat(worker)
  }

  // fill with random numbers
  console.log('Filling Int buffer');
  intBuffer.forEach((value, index) => {
    intBuffer[index] = (Math.random() * MAX_NUMBER) + 1;
  });

  console.log('Dispatching worker jobs');
  workers.forEach((worker, workerIndex) => {
    worker.postMessage({ type: 'load-shared-input', input: sab });
    worker.postMessage({ type: 'load-shared-output', safe: outSab, unsafe: unsafeSab });
    worker.postMessage({ type: 'load-indices', workerIndex, workerCount: WORKER_COUNT });
    worker.postMessage({ type: 'calculate-sum' });
  });
}
