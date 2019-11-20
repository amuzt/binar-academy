var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    Title: {
        type: String
    },
    Author: {
        type: String
    },
    Category: {
        type: String
    },
    PostingDate: {
        type: Date
    },
    Deskripsi: {
        type: String
    }
})
module.exports = mongoose.model('articles', articleSchema)