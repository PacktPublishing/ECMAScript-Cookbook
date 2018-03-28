class Mission {
  constructor (name) {
    this.name = name;
  }

  describe () {
    console.log(`
The ${this.name} mission will be launched by a ${this.rocket.name} rocket, and
deliver a ${this.payload.name} to ${this.destination.name}.
    `);
  }
}

class Destination {
  constructor (name) {
    this.name = name;
  }
}

class Payload {
  constructor (name) {
    this.name = name;
  }
}

class Rocket {
  constructor (name) {
    this.name = name;
  }
}

const MarsMissionFactory = {
  create (name, rocket) {
    const mission = new Mission(name);
    mission.destination = new Destination('Martian surface');
    mission.payload = new Payload('Mars rover');
    mission.rocket = rocket;
    return mission;
  }
}

export function main() {
  // build an describe a mission
  MarsMissionFactory
    .create('Curiosity', new Rocket('Atlas V'))
    .describe();
  MarsMissionFactory
    .create('Spirit', new Rocket('Delta II'))
    .describe();
}

