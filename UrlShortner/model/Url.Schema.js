const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        require: true
    },
    redirectUrl: {
        type: String,
        unique: true,
    },
     urlVisited: {
        timestamp: []
    }
},
    {
        timestamps: true
    })

const urlModel = mongoose.model('url', urlSchema)

module.exports = urlModel;