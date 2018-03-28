class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const rockets = [
    new Rocket('US: Saturn V'),
    new Rocket('US: Saturn V'),
    new Rocket('US: Saturn V'),
    new Rocket('US: Falcon Heavy'),
    new Rocket('USSR: Soyuz') ,
    new Rocket('CN: Long March')
  ]

  const rocketSet = new WeakSet(rockets);
  console.log(rocketSet)
}