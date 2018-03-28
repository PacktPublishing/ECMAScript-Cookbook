class Rocket {
  constructor(name) {
    this.name = name;
  }
}

class RocketSiteMap {
  constructor () {
    this.map = new Map();
  }

  set (site, rocket) {
    if (!(rocket instanceof Rocket)) {
      throw new Error('Value of `RocketMap` must be of type `Rocket`');
    }
    else if (typeof site !== 'symbol') {
      throw new Error('Key of `RocketMap` must be of type `Symbol`');
    }
      
    this.map.set(site, rocket);
  }

  get (key) {
    return this.get(key);
  }
}

const LaunchSite = {
  KENNEDY_SPACE_CENTER: Symbol('Kennedy Space Center'),
  JUIQUAN: Symbol('Jiuquan Satellite Launch Center'),
  WHITE_SANDS: Symbol('Jiuquan Satellite Launch Center'),
  BAIKONUR: Symbol('Baikonur Cosmodrome')
}

export function main() {
  const rocketSiteMap = new RocketSiteMap();
  rocketSiteMap.set(LaunchSite.KENNEDY_SPACE_CENTER, new Rocket('US: Saturn V'));
  rocketSiteMap.set(LaunchSite.WHITE_SANDS, new Rocket('US: Falcon Heavy'));
  console.log(rocketSiteMap)

  try {
    rocketSiteMap.set(LaunchSite.KENNEDY_SPACE_CENTER, 'Buzz Lightyear');
  } catch (e) {
    console.error(e);
  }

  try {
    rocketSiteMap.set('Invalid Lanch Site', new Rocket('Long March'));
  } catch (e) {
    console.error(e);
  }
}