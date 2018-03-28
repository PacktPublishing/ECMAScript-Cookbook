class Rocket {
  constructor(name) {
    this.name = name;
  }
}

const LaunchSite = {
  KENNEDY_SPACE_CENTER: Symbol('Kennedy Space Center'),
  JUIQUAN: Symbol('Jiuquan Satellite Launch Center'),
  WHITE_SANDS: Symbol('Jiuquan Satellite Launch Center'),
  BAIKONUR: Symbol('Baikonur Cosmodrome')
}

export function main() {
  const falconHeavy = new Rocket('US: Falcon Heavy');
  const rocketSiteMap = new WeakMap();

  rocketSiteMap.set(new Rocket('US: Saturn V'), LaunchSite.KENNEDY_SPACE_CENTER);
  rocketSiteMap.set(falconHeavy, LaunchSite.KENNEDY_SPACE_CENTER);
  console.log(rocketSiteMap)

  rocketSiteMap.delete(falconHeavy);
  console.log(rocketSiteMap)

  // try to set with a symbol; expect error
  rocketSiteMap.set(LaunchSite.KENNEDY_SPACE_CENTER, falconHeavy);
}