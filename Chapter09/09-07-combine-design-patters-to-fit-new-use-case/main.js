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

class MissionBuilder {
  setMissionName (name) {
    this.missionName = name;
    return this;
  }

  setDestination (destination) {
    this.destination = destination;
    return this;
  }

  setPayload (payload) {
    this.payload = payload;
    return this;
  }

  setRocket (rocket) {
    this.rocket = rocket;
    return this;
  }

  build () {
    const mission = new Mission(this.missionName);
    mission.rocket = this.rocket;
    mission.destination = this.destination;
    mission.payload = this.payload;
    return mission;
  }
}

const MarsMissionFactory = {
  create (name, rocket) {
    return new MissionBuilder()
      .setMissionName(name)
      .setDestination(new Destination('Martian Surface'))
      .setPayload(new Payload('Mars Rover'))
      .setRocket(rocket)
      .build()
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

