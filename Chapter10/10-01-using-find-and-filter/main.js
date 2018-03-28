class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const saturnV = new Rocket('US: Saturn V');
  const falconHeavy = new Rocket('US: Falcon Heavy');
  const longMarch = new Rocket('CN: Long March');
  const rockets = [saturnV, falconHeavy, longMarch];

  const firstUSRocket = rockets.find((rocket) => rocket.name.indexOf('US') === 0);
  console.log('First US Rocket: ', firstUSRocket.name);
  const allUSRockets = rockets.filter((rocket) => rocket.name.indexOf('US') === 0);
  console.log('All US Rockets: ',allUSRockets);
}