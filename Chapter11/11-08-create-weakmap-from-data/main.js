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
  const rocketSites = [
    [ new Rocket('US: Saturn V'), LaunchSite.KENNEDY_SPACE_CENTER ],
    [ new Rocket('US: Falcon Heavy'), LaunchSite.WHITE_SANDS ],
    [ new Rocket('USSR: Soyuz'), LaunchSite.BAIKONUR ],
    [ new Rocket('CN: Dong Feng'), LaunchSite.JUIQUAN ],
    [ new Rocket('CN: Long March'), LaunchSite.JUIQUAN ]
  ];

  const rocketSiteMap = new WeakMap(rocketSites);
  console.log(rocketSiteMap);
}