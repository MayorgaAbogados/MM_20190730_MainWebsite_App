const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
    origin: true
});

exports.send = function (user) {
    return new Promise((resolve, reject) => {
        try {




            const { name, email, phone, message } = user;
            const text = `<div>
                        <h4>Information</h4>
                        <ul>
                            <li>
                            Name - ${name || ""}
                            </li>
                            <li>
                            Email - ${email || ""}
                            </li>
                            <li>
                            Phone - ${phone || ""}
                            </li>
                        </ul>
                        <h4>Message</h4>
                        <p>${message || ""}</p>
                        </div>`;

            console.warn(' functions.config().gmail ');
            console.warn(functions.config().gmail)

            const sesAccessKey = functions.config().gmail.email;
            const sesSecretKey = functions.config().gmail.password;

            const transporter = nodemailer.createTransport(smtpTransport({
                service: 'gmail',
                auth: {
                    user: sesAccessKey,
                    pass: sesSecretKey
                }
            }));
            const mailOptions = {
                to: "wallamejorge@hotmail.com",
                from: sesAccessKey,
                subject: `${name} sent you a new message`,
                text: text,
                html: text
            };

            try {
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(info);
                    }
                });
            } catch (tryError) {
                reject(tryError)
            }

        } catch (tryError) {
            console.error(TypeError)
            reject(tryError);
        }
    });
}