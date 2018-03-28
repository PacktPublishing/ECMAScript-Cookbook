class Rocket {
  constructor(name) {
    Object.assign(this, Launcher);
    this.name = name;
  }
  
  print() {
    console.log(this.name + ' is a rocket');
  }
}

class InactiveRocket extends Rocket {
 constructor(name, lastFlown) {
    super(name);
    this.lastFlown = lastFlown;
  }

  print() {
    console.log(this.name + ' is an inactive rocket');
    console.log(`${this.name} was last flown: ${this.lastFlown}`);
  }
}

const Launcher = {
  prepareForLaunch () {
    if (this instanceof InactiveRocket) {
      console.error(`Unable to launch, rocket ${this.name} has been inactive since ${this.lastFlown}`);
    } else {
      console.log(`${this.name} is ready to launch.`);
    }
  }
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V', new Date('May 14, 1973'));
  const falconHeavy = new Rocket('Falcon Heavy');

  saturnV.prepareForLaunch();
  falconHeavy.prepareForLaunch();
}