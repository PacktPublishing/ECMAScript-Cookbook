class Rocket {
 constructor(name) {
   this.name = name;
 }
}

class InactiveRocket extends Rocket {
 constructor(name, lastFlown) {
    super(name);
    this.lastFlown = lastFlown;
  }
}

function isA(instance, klass) {
  return instance.constructor === klass;
}

export function main() {
  const saturnV = new InactiveRocket('Saturn V', new Date('May 14, 1973'));

  console.log(saturnV.name + ' instance of Rocket: ' + isA(saturnV, Rocket));
  console.log(saturnV.name + ' instance of InactiveRocket: ' + isA(saturnV, InactiveRocket));
}
