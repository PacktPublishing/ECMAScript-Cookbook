const global = this;

global.onmessage = (message) => {
  const { type, index } = message.data;
  console.log('Worker (%s) recieved a messge (%s)', index, type);

  global.postMessage({ index, type: 'pong' })
  global.postMessage({ index, type: 'another-type' })
};

