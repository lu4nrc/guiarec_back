const PostSchema = require("../models/post");

const Delete_post = async ({ id }) => {
    try {
     await PostSchema.deleteOne(({_id:id}));
    } catch (e) {
        console.log(e);
    }
}
module.exports=Delete_post;