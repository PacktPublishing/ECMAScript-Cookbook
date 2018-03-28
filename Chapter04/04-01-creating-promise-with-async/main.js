// main.js
async function someTask () {
	console.log('Performing some task');
}


export function main() {
  console.log('Before promise created');
  someTask().then(function () {
    console.log('After Task completed');
  })
  console.log('After promise created');
}
