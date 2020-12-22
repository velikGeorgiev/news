module.exports = ({ PostModel, Post }) => (req, res, next) => {
    let postEntity = null;

    try {
        postEntity = Post(req.body);
    } catch (e) {
        return res.status(422).json({
            message: e.message
        });
    }

    let post = new PostModel(postEntity);

    post.Add().then(_ => {
        return res.json({ok: true});
    });
}