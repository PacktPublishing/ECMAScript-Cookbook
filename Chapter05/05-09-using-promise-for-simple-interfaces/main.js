
async function sumOnWorker(array) {
  return new Promise(function (resolve) {
    const worker = new Worker('./worker.js');
    worker.onmessage = (message) => {
      const { type, result } = message.data;
      console.log('Completed operation (%s), result: %s',
        type,
        result
      );
      return resolve(result);
    };

    worker.postMessage({ type: 'calculate-sum', array });
  });
}

export async function main() {
  const array0 = (new Array(10000)).fill().map(Math.random);
  const array1 = (new Array(1000)).fill().map(Math.random);
  const array2 = (new Array(100)).fill().map(Math.random);

  sumOnWorker(array0).then((sum) => console.log('Array 0 sum: %s', sum));
  sumOnWorker(array1).then((sum) => console.log('Array 1 sum: %s', sum));
  sumOnWorker(array2).then((sum) => console.log('Array 2 sum: %s', sum));
}
