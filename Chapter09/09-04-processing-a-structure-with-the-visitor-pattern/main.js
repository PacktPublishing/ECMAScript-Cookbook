/* visitor that inspects mission */
class MissionInspetor {
  visit (element) {
    if (element instanceof Mission) {
      this.visitMission(element);
    }
    else if (element instanceof Destination) {
      this.visitDestination(element);
    }
    else if (element instanceof Rocket) {
      this.visitRocket(element);
    }
    else if (element instanceof Payload) {
      this.visitPayload(element);
    }
  }

  visitMission (mission) {
    console.log('Mission ok');
    mission.describe();
  }

  visitDestination (destination) {
    const name = destination.name.toLowerCase();

    if (
      name === 'mercury' ||
      name === 'venus' ||
      name === 'earth' ||
      name === 'moon' ||
      name === 'mars'
    ) {
      console.log('Destination: ', name, ' approved');
    } else {
      throw new Error('Destination: \'' + name + '\' not approved at this time');
    }
  }

  visitRocket (rocket) {
    console.log('Rocket: ', rocket.name, ' approved');
  }

  visitPayload (payload) {
    const name = payload.name.toLowerCase();
    const payloadExpr = /(orbiter)|(rover)/;

    if ( payloadExpr.test(name) ) {
      console.log('Payload: ', name, ' approved');
    }
    else {
      throw new Error('Payload: \'' + name + '\' not approved at this time');
    }
  }
}

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

  accept (visitor) {
    this.rocket.accept(visitor);
    this.payload.accept(visitor);
    this.destination.accept(visitor);
    visitor.visit(this);
  }
}

class Destination {
  constructor (name) {
    this.name = name;
  }

  accept (visitor) {
    visitor.visit(this);
  }
}

class Payload {
  constructor (name) {
    this.name = name;
  }

  accept (visitor) {
    visitor.visit(this);
  }
}

class Rocket {
  constructor (name) {
    this.name = name;
  }

  accept (visitor) {
    visitor.visit(this);
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

export function main() {
  // build an describe a mission
  const jadeRabbit = new MissionBuilder()
    .setMissionName('Jade Rabbit')
    .setDestination(new Destination('Moon'))
    .setPayload(new Payload('Lunar Rover'))
    .setRocket(new Rocket('Long March 3B Y-23'))
    .build();

  const curiosity = new MissionBuilder()
    .setMissionName('Curiosity')
    .setDestination(new Destination('Mars'))
    .setPayload(new Payload('Mars Rover'))
    .setRocket(new Rocket('Delta II'))
    .build();

  // expect error from Destination
  const buzz = new MissionBuilder()
    .setMissionName('Buzz Lightyear')
    .setDestination(new Destination('Too Infinity And Beyond'))
    .setPayload(new Payload('Interstellar Orbiter'))
    .setRocket(new Rocket('Self Propelled'))
    .build();

  // expect error from payload
  const terraformer = new MissionBuilder()
    .setMissionName('Mars Terraformer')
    .setDestination(new Destination('Mars'))
    .setPayload(new Payload('Terraformer'))
    .setRocket(new Rocket('Light Sail'))
    .build();

  const inspector = new MissionInspetor();

  [jadeRabbit, curiosity, buzz, terraformer].forEach((mission) => {
    try {
      mission.accept(inspector);
    } catch (e) { console.error(e); }
  });
}

