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

  const nationalities = rockets.map((rocket) => {
    if (rocket.name.indexOf('USSR:') === 0) {
      return 'Soviet';
    }
    if (rocket.name.indexOf('CN:') === 0) {
      return 'Chinese';
    }
    if (rocket.name.indexOf('US:') === 0) {
      return 'American';
    }

    return 'unknown';
  });

  console.log('Nationalities:', nationalities);
}