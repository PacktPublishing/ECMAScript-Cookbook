class Rocket {
  constructor (name) {
    this.name = name;
  }
}

const RocketManager = {
  rockets: {},
  findOrCreate (name) {
    const rocket = this.rockets[name] || new Rocket(name);
    this.rockets[name] = rocket;
    return rocket;
  }
}

export function main() {
  const atlas = RocketManager.findOrCreate('Atlas V');
  const atlasCopy = RocketManager.findOrCreate('Atlas V');
  const atlasClone = new Rocket('Atlas V');

  console.log('Copy is the same: ', atlas === atlasCopy);
  console.log('Clone is the same: ', atlas === atlasClone);
}

