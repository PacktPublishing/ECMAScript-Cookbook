function onMessage(message) {
  const { result, type } = message.data;
  console.log('result from worker operation: %s', type, result);
}

export async function main() {
  console.log('Main function starting.');
  const NUM_COUNT = 2048;
  const BYTES_FOR_32_BIT = 4;
  const ARRAY_SIZE = NUM_COUNT * BYTES_FOR_32_BIT;
  const MAX_NUMBER = 32;

  const sab = new SharedArrayBuffer(ARRAY_SIZE);
  const worker = new Worker('./worker.js');
  worker.onmessage = onMessage;
  worker.postMessage({ type: 'load-array', array: sab });

  // add data to buffer
  const intBuffer = new Int32Array(sab);

  // fill with random numbers
  intBuffer.forEach((value, index) => {
    intBuffer[index] = (Math.random() * MAX_NUMBER) + 1;
  });

  worker.postMessage({ type: 'calculate-sum' });
  worker.postMessage({ type: 'calculate-average'});
}

