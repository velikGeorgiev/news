module.exports = ({ ArchiveModel }) => (req, res, next) => {
    ArchiveModel.RemoveById(req.params['id']).then(result => {
        if (result.deletedCount == 1) {
            res.json({ok: true});
        } else {
            res.status(404).json({
                message: 'Archive not found'
            });
        }
    });
}