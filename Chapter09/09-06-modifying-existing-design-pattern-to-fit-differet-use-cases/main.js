class Mission {
  constructor (name) {
    this.name = name;
  }

  describe () {
    console.log(`
The ${this.name} mission will be launched by a ${this.rocket.name}, and
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

function MissionProgramFactoryFn(rocketName, destinationName, payloadName) {
  return (name) => {
    const mission = new Mission(name);
    mission.rocket = new Rocket(rocketName);
    mission.destination = new Destination(destinationName);
    mission.payload = new Payload(payloadName);
    return mission;
  }
}

export function main() {
  const marsRoverProgram = MissionProgramFactoryFn('AtlasV', 'MartianSurface', 'Mars Rover');
  marsRoverProgram('Curiosity').describe();
  marsRoverProgram('Spirit').describe();

  const interstellarProgram = MissionProgramFactoryFn('Warp Drive', 'Vulcan', 'Dimplomatic Vessal');
  interstellarProgram('Enterprise E').describe();
  interstellarProgram('Defiant').describe();
}

