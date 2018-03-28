class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const usRockets= [
    new Rocket('US: Saturn V'),
    new Rocket('US: Falcon Heavy')
  ];

  const sovietRocket = new Rocket('USSR: Soyuz');

  const chineseRockets = [
    new Rocket('CN: Dong Feng'),
    new Rocket('CN: Long March')
  ];

  const rockets = [...usRockets, sovietRocket, ...chineseRockets];
  console.log(rockets);
}
