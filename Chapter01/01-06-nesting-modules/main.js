import { atlas, falconHeavy, saturnV } from './rockets/index.js'

export function main () {
  saturnV.launch();
  falconHeavy.launch();
  atlas.launch();
}