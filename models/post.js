const mongoose =require("mongoose") ;

const postSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    videoUrl: String,
    description: String,
    category:String
});

module.exports=mongoose.model('Post', postSchema);
