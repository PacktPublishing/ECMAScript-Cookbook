class Rocket {
  constructor(name) {
    this.name = name;
  }
}

export function main() {
  const nationalities = [
    'American',
    'American',
    'Chinese',
    'American',
    'Chinese',
    'Chinese',
    'Soviet',
    'Soviet'
  ];

  const nationalityCount = nationalities.reduce((acc, nationality) => {
    acc[nationality] = acc[nationality] || 0;
    acc[nationality] ++;
    return acc;
  }, {});

  console.log('Nationalities:', nationalityCount);
}