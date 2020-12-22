module.exports = ({ PostModel }) => (req, res, next) => {
    PostModel.GetAll().then(posts => {
        return res.json(posts);
    });
}