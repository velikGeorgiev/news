module.exports = function buildPost({ Joi }) {
    return function makePost(post = {
        author,
        title,
        text
    } = {}) {
        const schema = Joi.object({
            text: Joi.string().min(3).required(),
            author: Joi.string().min(3).max(20).required(),
            title: Joi.string().min(3).max(100).required(),
        });
    
        const { error: validationError } = schema.validate(post);

        if (validationError) {
            throw new Error(validationError);
        }

        return Object.freeze(post);
    };
}