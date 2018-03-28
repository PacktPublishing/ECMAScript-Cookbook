export function main() {
  const rockets = [
    'US: Saturn V',
    'US: Falcon Heavy',
    'USSR: Soyuz',
    'CN: Long March',
    'US: Saturn V',
    'US: Saturn V'
  ]

  const rocketSet = new Set(rockets);
  console.log(rocketSet)
}