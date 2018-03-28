
class Rocket {
  constructor(name) {
    this.name = name;
  }

  takeOff(countdown = 1000) {
    console.log(this.name + ' starting countdown.');
    setTimeout(() => {
      console.log(`Blastoff! ${this.name} has taken off`);
    }, countdown);
  }
}

export function main() {
  const saturnV = new Rocket('Saturn V');
  const falconHeavy = new Rocket('Falcon Heavy');
  saturnV.takeOff(500);
  falconHeavy.takeOff();
}