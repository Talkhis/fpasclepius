const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/asclepius-api/model.json');
}
module.exports = loadModel;
