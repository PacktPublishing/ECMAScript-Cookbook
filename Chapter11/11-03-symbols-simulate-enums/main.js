const LaunchSite = {
  KENNEDY_SPACE_CENTER: Symbol('Kennedy Space Center'),
  WHITE_SANDS: Symbol('White Sands Missile Range'),
  BAIKONUR: Symbol('Baikonur Cosmodrome'),
  BROGLIO: Symbol('Broglio Space Center'),
  VIKRAM_SARABHAI: Symbol('Vikram Sarabhai Space Centre')
}

export function main() {
  console.log("Kennedy Space Center Site: ", LaunchSite.KENNEDY_SPACE_CENTER);
  console.log("Duplicate String: ", LaunchSite.KENNEDY_SPACE_CENTER === 'Kennedy Space Center');
  console.log("Duplicate Symbol: ", LaunchSite.KENNEDY_SPACE_CENTER === Symbol('kennedy Space Center'));
  console.log("Duplicate Global Symbol: ", LaunchSite.KENNEDY_SPACE_CENTER === Symbol.for('kennedy Space Center'));
}
