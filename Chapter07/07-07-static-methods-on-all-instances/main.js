let rocketMap = {}; 

class Rocket {
  static find (name) {
    return rocketMap[name];
  }

  constructor(name) {
    this.name = name;
    rocketMap[name] = this;
  }
}

export function main() {
  const saturnV = new Rocket('Saturn V');
  const falconHeavy = new Rocket('Falcon Heavy');

  console.log('Is Saturn V?', saturnV === Rocket.find('Saturn V'));
  console.log('Is Falcon Heavy?', falconHeavy === Rocket.find('Saturn V'));
  console.log('Is Same Rocket?', Rocket.find('Saturn V') === Rocket.find('Saturn V'));
}