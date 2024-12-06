const tf = require('@tensorflow/tfjs-node');
const modelLink = 'https://storage.googleapis.com/asclepius-dicoding-cc/model.json'
const envModelLink = `${process.env.MODEL_URL}`
async function loadModel() {
    return tf.loadGraphModel(envModelLink ?? modelLink);
}
module.exports = loadModel;
