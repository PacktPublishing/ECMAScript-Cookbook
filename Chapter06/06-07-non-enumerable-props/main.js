
export function main() {
  const bookAuthors = {
    "Star's End": "Cassandra Rose Clarke",
    "Three Body Problem": "Liu Cixin",
    "Houston Houston, Do You Read?": "James Tiptree Jr."
  };

  Object.defineProperty(bookAuthors, 'visibleProp', {
    enumerable: true,
    value: Math.random()
  });

  Object.defineProperty(bookAuthors, 'invisibleProp', {
    value: () => console.log('This function is hidden.')
  });

  for (const [prop, value] of Object.entries(bookAuthors)) {
     console.log(prop, value)
  }
  bookAuthors.invisibleProp();
}
