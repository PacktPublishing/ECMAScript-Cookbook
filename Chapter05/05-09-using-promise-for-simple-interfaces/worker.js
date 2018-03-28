const global = this;

global.onmessage = (message) => {
  const { data } = message;

  switch (data.type) {
    case 'calculate-sum':
      const sum = data.array.reduce((acc, number) => acc + number, 0);
      global.postMessage({ type: 'sum', result: sum });
      break;
  }
}
