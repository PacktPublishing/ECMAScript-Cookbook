class Rocket {
  constructor(name) {
    this.name = name;
  }
}

function intersection (set1, set2) {
  const result = new Set();

  set1.forEach((entry) => {
    if (set2.has(entry)) {
      result.add(entry)
    }
  });

  return result;
}

export function main() {
  const usRockets = [
    new Rocket('US: Saturn V'),
    new Rocket('US: Falcon Heavy')
  ];
  const americanSet = new Set(usRockets);
  console.log('American Set', americanSet);

  const allRockets = usRockets.concat([
    new Rocket('USSR: Soyuz') ,
    new Rocket('CN: Long March')
  ]);

  const fullSet = new Set(allRockets);
  console.log('Full Set', fullSet);

  console.log('Intersetion', intersection(americanSet, fullSet));
}