const mongoose = require('mongoose')

const dbConnection = async (req, res) => {
    try {
<<<<<<<< HEAD:Multer/backend/config/DB.js
        const connection = mongoose.connect('mongodb://0.0.0.0/multerFiles')
========
        const connection = mongoose.connect(process.env.MONGODB_CONNECTION_ATLAS )
>>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838:UrlShortner/config/db.js

        if (connection) {
            console.log('mongodb Connected Successfully👍');

        }
        const db = mongoose.connection
        db.on('connected', () => {
            console.log("connected to mongodb server");

        })
        db.on("disconnected", () => {
            console.log("disconnected to mongodb server");
        });
        db.on("error", (err) => {
            console.log("connected error to mongodb server", err);
        });
    } catch (error) {
        console.log('Connection problem in Database', error);

    }
}

module.exports = dbConnection