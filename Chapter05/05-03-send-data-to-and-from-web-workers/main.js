function onMessage(message) {
  const { result, type } = message.data;
  console.log('Result for operation (%s): (%s)', type, result);
}

export function main() {
  const worker = new Worker('./worker.js');
  worker.onmessage = onMessage;

  const numbers = (new Array(100)).fill().map(Math.random)
  worker.postMessage({ type: 'sum', numbers});
  worker.postMessage({ type: 'average', numbers});
}


