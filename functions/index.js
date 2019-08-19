const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const vipForm = require('./forms/vipForm.js');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase **!");
});

exports.formVIP = functions.https.onRequest((request, response) => {
    console.log('vipForm');
    console.log(vipForm)
    vipForm.handler(request)
        .then((handlerResponse) =>
            cors(request, response, () =>
                response.send(handlerResponse)))
        .catch((handlerError) =>
            cors(request, response, () =>
                response.status(500).send(handlerError)))
});
