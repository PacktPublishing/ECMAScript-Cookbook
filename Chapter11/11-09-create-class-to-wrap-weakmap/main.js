class Rocket {
  constructor(name) {
    this.name = name;
  }
}

class RocketSiteMap {
  constructor () {
    this.map = new WeakMap();
  }

  set (rocket, site) {
    if (!(rocket instanceof Rocket)) {
      throw new Error('Key of `RocketMap` must be of type `Rocket`');
    }
    else if (typeof site !== 'symbol') {
      throw new Error('Values of `RocketMap` must be of type `Symbol`');
    }
      
    this.map.set(rocket, site);
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
  rocketSiteMap.set(new Rocket('US: Saturn V'), LaunchSite.KENNEDY_SPACE_CENTER);
  rocketSiteMap.set(new Rocket('US: Falcon Heavy'), LaunchSite.KENNEDY_SPACE_CENTER);
  console.log(rocketSiteMap)

  try {
    rocketSiteMap.set('Buzz Lightyear', LaunchSite.KENNEDY_SPACE_CENTER);
  } catch (e) {
    console.error(e);
  }

  try {
    rocketSiteMap.set(new Rocket('Long March'), 'Invalid Lanch Site');
  } catch (e) {
    console.error(e);
  }
}