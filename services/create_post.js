const PostSchema = require("../models/post");

const Create_post = async ({ name, imageUrl, videoUrl, description, category }) => {
    try {
     await PostSchema.create(({ name, imageUrl, videoUrl, description,category }));
    } catch (e) {
        console.log(e);
    }
}
module.exports=Create_post;