class Mission {
  constructor () {
    if (this.constructor === Mission) {
      throw new Error('Mission is an abstract class, must extend');
    }
  }

  execute () {
    this.determinDestination();
    this.determinePayload();
    this.launch();
  }

}

class LunarRover extends Mission {
  constructor (name) {
    super();
    this.name = name;
  }

  determinDestination() {
    this.destination = 'Oceanus Procellarum';
  }

  determinePayload() {
    this.payload = 'Rover with camera and mass spectrometer.';
  }

  launch() {
    console.log(`
Destination: ${this.destination}
Playload: ${this.payload}
Lauched!
Rover Will arrive in a week.
    `);
  }
}

class JovianOrbiter extends Mission {
  constructor (name) {
    super();
    this.name = name;
  }

  determinDestination() {
    this.destination = 'Jovian Orbit';
  }

  determinePayload() {
    this.payload = 'Orbiter with decent module.';
  }

  launch() {
    console.log(`
Destination: ${this.destination}
Playload: ${this.payload}
Lauched!
Orbiter Will arrive in 7 years.
    `);
  }
}

export function main() {
  const jadeRabbit = new LunarRover('Jade Rabbit');
  jadeRabbit.execute();
  const galileo = new JovianOrbiter('Galileo');
  galileo.execute();
}

