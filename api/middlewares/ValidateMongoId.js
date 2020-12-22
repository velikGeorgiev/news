const mongoose = require('mongoose');

module.exports = function (req, res, next) {
    const id = req.params['id'] || null;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(422).json({
            message: "Invalid id format"
        });
    } else {
        next();
    }
}