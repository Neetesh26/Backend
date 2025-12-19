const mongoose = require('mongoose')

const dbHandlers = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI_LOCAL)
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
        return res.status(500).json({
            message: 'Database connection occur',
            error: error
        })
    }
}
module.exports= dbHandlers;
