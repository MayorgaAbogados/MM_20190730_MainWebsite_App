const email = require('./../emails/basic.email.js');
exports.handler = function (request) {
    return new Promise(async (resolve, reject) => {
        try {
            const formData = request.body;
            const isEmail = await email.send(formData);
            console.log(' Email Response ');
            console.log(emailResponse);
            resolve(' ** OK => ');

        } catch (tryError) {
            console.error(tryError)
            reject(tryError);
        }
    });
}