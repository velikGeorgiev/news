module.exports = ({ ArchiveModel }) => (req, res) => {
    ArchiveModel.GetAll().then(posts => {
        res.json(posts);
    })
}