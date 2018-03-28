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

  const allAreRockets = rockets.every((rocket) => rocket instanceof Rocket);
  console.log('All are Rockets: ', allAreRockets);
  const allAmerican = rockets.every((rocket) => rocket.name.indexOf('US:') === 0);
  console.log('All rockets are American: ', allAmerican);
  const someAmerican = rockets.some((rocket) => rocket.name.indexOf('US:') === 0);
  console.log('Some rockets are American: ', someAmerican);
}