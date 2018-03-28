import { atlas, falconHeavy, saturnV } from './rockets/index.js'

export function main () {
  const rockets = [saturnV, falconHeavy, atlas];
  rockets.map((rocket) => rocket.launch() );
}