const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;

const heartSchema = new Schema({
    heartCount: {
        type: Number,
        default:0
    },
    _user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    _forum: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Forum'
    },
    _comment: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    },
})

const Heart = mongoose.model('Heart', heartSchema);

module.exports = Heart;