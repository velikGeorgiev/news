const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArchiveModel = require('./Archive');
const socketioapp = require('../services/socketio');

const NewsPostSchema = new Schema({
    author: String,
    title: String,
    text: String,
    created_at: {
        type: Date,
        default: new Date(),
        index: true
    }
});

NewsPostSchema.methods.Add = function () {
    return this.save();    
}

NewsPostSchema.methods.Archive = function () {
    let archive = new ArchiveModel({
        title: this.title,
        author: this.author,
        text: this.text,
        created_at: this.created_at
    });

    return new Promise((resolve, reject) => {
        archive.Add().then(_ => {
            this.remove().then(_ => resolve());
        }).catch(err => reject(err));
    })
}
NewsPostSchema.statics.GetById = function (id) {
    return this.findOne({_id: id});
};

NewsPostSchema.statics.GetAll = function () {
    return this.find({}).sort({created_at: -1});    
}

NewsPostSchema.post('save', (doc) => {
    socketioapp().broadcast('posts', {
        title: doc.title,
        text: doc.text,
        author: doc.author,
        _id: doc._id,
        created_at: doc.created_at,
    });
});

module.exports = mongoose.model('news_post', NewsPostSchema);