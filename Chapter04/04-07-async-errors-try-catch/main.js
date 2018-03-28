export async function main() {
  console.log('Before Check');

  try {
    await addBosters();
    await performGuidanceDiagnostic();
  } catch (e) {
    console.error(e);
  }

  console.log('After Check');
}

async function addBosters (rocket) {
  console.log('Adding Boosters');
  throw new Error('Unable to add Boosters');
}

async function performGuidanceDiagnostic (rocket) {
  console.log('Checking Guidance System');
  throw new Error('Unable to finish guidance diagnostic');
}