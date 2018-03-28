// main.js
async function getRandomNumber () {
  return Math.random();
}

export async function main () {
  console.log('before task');
  const result = await getRandomNumber();
  console.log('Received the value: %s', result);
  console.log('after task completed');
}
