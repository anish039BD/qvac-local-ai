const { loadModel } = require('@qvac/sdk');

async function run() {
  console.log('Loading on-device model...');
  
  // Update with strict configuration format
  const model = await loadModel({
    modelId: 'tinyllama-1.1b',
    modelType: 'completion',
    modelConfig: {}
  });
  
  const notes = 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy.';
  console.log('\nInput Notes:\n' + notes);
  
  console.log('\nGenerating summary on device...');
  const result = await model.completion({
    prompt: 'Summarize this in one short sentence: ' + notes
  });
  
  console.log('\nAI Result:\n' + (result.text ? result.text : result));
}

run().catch(console.error);
