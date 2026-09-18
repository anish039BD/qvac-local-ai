const { loadModel } = require('@qvac/sdk');

async function run() {
  console.log('Loading on-device model...');
  const model = await loadModel('text-model');
  
  const notes = 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.';
  console.log('\nInput Notes:\n' + notes);
  
  console.log('\nGenerating summary on device...');
  const result = await model.completion({
    prompt: 'Summarize this in one short sentence: ' + notes
  });
  
  console.log('\nAI Result:\n' + result);
}

run().catch(console.error);
