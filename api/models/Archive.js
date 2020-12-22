const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const socketioapp = require('../services/socketio');

const ArchivePost = new Schema({
    author: String,
    title: String,
    text: String,
    created_at: {
        type: Date,
        index: true,
    },
    archived_at: {
        type: Date,
        default: new Date(),
        index: true
    }
});

ArchivePost.methods.Add = function () {
    return this.save();    
}

ArchivePost.methods.Remove = function () {
    return this.remove();
}

ArchivePost.statics.RemoveById = function (_id) {
    return this.remove({ _id });
}

ArchivePost.statics.GetById = function (_id) {
    return this.findOne({_id});
}

ArchivePost.statics.GetAll = function (_id) {
    return this.find({}).sort({archived_at: -1});
}

ArchivePost.post('save', (doc) => {
    socketioapp().broadcast('archive', {
        title: doc.title,
        text: doc.text,
        author: doc.author,
        _id: doc._id,
        created_at: doc.created_at
    });
});


module.exports = mongoose.model('archive_post', ArchivePost);