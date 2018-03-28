
class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const saturnV = new Rocket('Saturn V');
  const falconHeavy = new Rocket('Falcon Heavy');
  console.log(saturnV.name, saturnV);
  console.log(falconHeavy.name, falconHeavy);
}