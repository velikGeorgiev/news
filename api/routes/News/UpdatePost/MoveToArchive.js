module.exports = ({ PostModel }) => (req, res, next) => {
    const id = req.params['id'] || null;

    PostModel.GetById(id).then(post => {
        if (!post) {
            return res.status(404).json({
                message: 'Not Found'
            })
        }

        return post.Archive().then(_ => {
            res.json({ok: true});
        });
    });
}