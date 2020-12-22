const mongoConnection = require('../MongoConnection');
const PostModel = require('../models/Post');

(async () => {
    for (let i = 0; i < 10; i++) {
        let post = new PostModel({
            title: `Title ${i}`,
            text: `Text ${i}`,
            author: `Author ${i}`,
        });
    
        console.log(`Inserting Post Nª${i} of 10`);
    
        await post.Add();
    }
})();