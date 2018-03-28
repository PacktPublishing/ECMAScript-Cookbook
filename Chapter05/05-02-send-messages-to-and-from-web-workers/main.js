function onMessage(message) {
  const { type, index } = message.data;
  console.log('Main recieved a messge (%s) from index: (%s)', type, index);
}

const WORKER_COUNT = 5;

export function main() {

  for (let index = 0; index < WORKER_COUNT; index++) {
    const worker = new Worker('./worker.js');

    worker.onmessage = onMessage;
    worker.postMessage({ type: 'ping', index });
  }
}
