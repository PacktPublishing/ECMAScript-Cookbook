function onComplete(message, workers) {
  const { index, timeout } = message.data;
  workers.map((w) => w.terminate());

  console.log(
    'Result from worker (%s) after timeout (%s): %s',
    index,
    timeout
  );
}

export function main() {
  const totalWorkers = 10;
  const workers = [];

  for (let i = 0; i < totalWorkers; i++) {
    const worker = new Worker('./worker.js');
    worker.onmessage = (msg) => onComplete(msg, workers);
    workers.push(worker);
  }

  workers.map((worker, index) => {
    workers[index].postMessage({ index });
  });
}
