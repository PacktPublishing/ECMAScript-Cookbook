class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const saturnV = new Rocket('US: Saturn V');
  const falconHeavy = new Rocket('US: Falcon Heavy');
  const soyuz = new Rocket('USSR: Soyuz');
  const dongFeng = new Rocket('CN: Dong Feng');
  const longMarch = new Rocket('CN: Long March');
  const rockets = [saturnV, falconHeavy, soyuz, dongFeng, longMarch];

  const americanRockets = rockets.slice(0, 2);
  const sovietRockets = rockets.slice(2, 3);
  const chineseRockets = rockets.slice(3, 5);
  console.log('American Rockets: ', americanRockets);
  console.log('Soviet Rockets: ', sovietRockets);
  console.log('Chinese Rockets: ', chineseRockets);
}