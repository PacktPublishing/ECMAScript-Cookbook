const global = this;
const timeout = Math.floor(Math.random() * 10000);

global.onmessage = (message) => {
  const data = {
    index: message.data.index,
    timeout: timeout
  };

  setTimeout(() => global.postMessage(data), timeout)
}
