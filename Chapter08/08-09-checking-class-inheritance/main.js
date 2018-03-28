class Rocket {}
class ActiveRocket extends Rocket {}
class OrbitingRocket extends ActiveRocket {}

function listInheritance (instance) {
  const hierarchy = [];
  let currClass = instance.constructor;

  while (currClass.name) {
    hierarchy.push(currClass.name);
    currClass = Object.getPrototypeOf(currClass)
  }

  console.log(hierarchy.join(' -> '));
}

export function main() {
  const orbitingRocket = new OrbitingRocket();
  listInheritance(orbitingRocket);
}