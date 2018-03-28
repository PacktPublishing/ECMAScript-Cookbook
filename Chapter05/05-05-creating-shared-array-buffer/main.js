export async function main() {
  const NUM_COUNT = 2048;
  const BYTES_FOR_32_BIT = 4;
  const ARRAY_SIZE = NUM_COUNT * BYTES_FOR_32_BIT;
  const MAX_NUMBER = 1024;

  const sab = new SharedArrayBuffer(ARRAY_SIZE);
  const intBuffer = new Int32Array(sab);

  // fill with random numbers
  intBuffer.forEach((value, index) => {
    intBuffer[index] = Math.random() * MAX_NUMBER;
  });

  // sum the ints
  const sum = intBuffer.reduce((acc, number) =>
    acc + number
  , 0);

  console.log('Sum of integers in Array Buffer: %s', sum);
}