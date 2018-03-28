class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const rockets = [
    new Rocket('US: Saturn V'),
    new Rocket('US: Falcon Heavy'),
    new Rocket('USSR: Soyuz'),
    new Rocket('CN: Dong Feng'),
    new Rocket('CN: Long March')
  ]

  const [
    saturnV,
    falconHeavy,
    soyuz,
    dongFeng,
    longMarch
  ] = rockets;

  console.log(saturnV, falconHeavy, soyuz, dongFeng, longMarch);
}