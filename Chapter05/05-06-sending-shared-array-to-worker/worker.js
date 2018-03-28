const global = this;
let sharedIntArray;

global.onmessage = (message) => {
  const { data } = message;

  switch (data.type) {
    case 'load-array':
      sharedIntArray = new Int32Array(data.array);
      break;

    case 'calculate-sum':
      const sum = sharedIntArray.reduce((acc, number) => acc + number, 0);
      global.postMessage({ type: 'sum', result: sum });
      break;

    case 'calculate-average':
      const total = sharedIntArray.reduce((acc, number) => acc + number, 0);
      const average = total / sharedIntArray.length
      global.postMessage({ type: 'average', result: average });
      break;
  }
};
