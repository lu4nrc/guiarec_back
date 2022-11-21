const PostSchema = require("../models/post");
const Get_posts = async () => {
    try {
        const posts = await PostSchema.find();
        return posts;
    } catch (e) {
        console.log(e);
    }
}
module.exports=Get_posts;