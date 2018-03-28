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
  const rocketSiteMap = new Map();

  rocketSiteMap.set(LaunchSite.KENNEDY_SPACE_CENTER, new Rocket('US: Saturn V'));
  const falconHeavy = new Rocket('US: Falcon Heavy');
  rocketSiteMap.set(LaunchSite.WHITE_SANDS, falconHeavy);
  console.log(rocketSiteMap.get(LaunchSite.KENNEDY_SPACE_CENTER));
  console.log(rocketSiteMap.get(LaunchSite.WHITE_SANDS));
  
  rocketSiteMap.set(LaunchSite.KENNEDY_SPACE_CENTER, new Rocket('US: Space Shuttle'));
  rocketSiteMap.delete(LaunchSite.WHITE_SANDS);
  console.log(rocketSiteMap.get(LaunchSite.KENNEDY_SPACE_CENTER));
  console.log(rocketSiteMap.get(LaunchSite.WHITE_SANDS));
}