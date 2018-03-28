
class Rocket {
  constructor(name) {
    this._secretName = name;
  }

  get name() {
    return this._secretName;
  }

  set name(newValue) {
    if (typeof newValue === 'string') {
      this._secretName = newValue;
    } else {
      console.error('Invalid name: ' + newValue)
    }
  }
}

export function main() {
  const saturnV = new Rocket('Saturn V');
  console.log(saturnV.name)

  saturnV.name = 'Saturn Five';
  console.log(saturnV.name)

  saturnV.name = 5;
  console.log(saturnV.name)
}
