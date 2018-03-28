class Rocket {
  constructor(name) {
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

class Launcher {
  constructor (rocket) {
    this.rocket = rocket;
  }

  prepareForLaunch () {
    const { rocket } = this;

    if (rocket instanceof InactiveRocket) {
      console.error(`Unable to launch, rocket ${rocket.name} has been inactive since ${rocket.lastFlown}`);
    } else {
      console.log(`${rocket.name} is ready to launch.`);
    }
  }
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V', new Date('May 14, 1973'));
  const falconHeavy = new Rocket('Falcon Heavy');

  const saturnVLauncher = new Launcher(saturnV);
  const falconHeavyLauncher = new Launcher(falconHeavy);

  saturnVLauncher.prepareForLaunch();
  falconHeavyLauncher.prepareForLaunch();
}