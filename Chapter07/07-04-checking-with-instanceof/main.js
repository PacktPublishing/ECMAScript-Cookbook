
class Rocket {
  constructor(name) {
    this.name = name;
  }
}

class InactiveRocket {
  constructor(name) {
    this.name = name;
  }
}

function printRocketType(rocket) {
  if (rocket instanceof InactiveRocket) {
    console.log(rocket.name + ' is an inactive rocket');
  } else {
    console.log(rocket.name + ' is active');
  }
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V');
  const falconHeavy = new Rocket('Falcon Heavy');

  [saturnV, falconHeavy].forEach(printRocketType);
}

