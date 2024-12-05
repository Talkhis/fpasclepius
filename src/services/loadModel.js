const tf = require('@tensorflow/tfjs-node');
const modelURL= 'https://storage.googleapis.com/asclepius-api-dicoding/model.json'
const envModelURL = `${process.env.MODEL_URL}`
async function loadModel(envModelURL ?? modelURL) {
    return tf.loadGraphModel();
}
module.exports = loadModel;
