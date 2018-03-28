console.log('Hello, from the worker.');

this.onmessage = function (message) {
  console.log('Message Recieved: (%s)', message.data.type);
}
