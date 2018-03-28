
class Rocket {
  constructor(name) {
    this.name = name;
  }

  get readOnlyValue() {
    return 'Cant\' touch this.';
  }
}

export function main() {
  const saturnV = new Rocket('Saturn V');

  console.log(saturnV.name);
  saturnV.name = 'Saturn Five';
  console.log(saturnV.name);

  console.log(saturnV.readOnlyValue);
  // throws error
  saturnV.readOnlyValue = 'somethingElse';
}