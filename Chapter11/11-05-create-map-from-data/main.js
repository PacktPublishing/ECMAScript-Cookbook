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
    [ LaunchSite.KENNEDY_SPACE_CENTER, new Rocket('US: Saturn V'),  ],
    [ LaunchSite.WHITE_SANDS, new Rocket('US: Falcon Heavy') ],
    [ LaunchSite.BAIKONUR, new Rocket('USSR: Soyuz') ],
    [ LaunchSite.JUIQUAN, new Rocket('CN: Long March') ]
  ]

  const rocketSiteMap = new Map(rocketSites);
  console.log(rocketSiteMap)
}