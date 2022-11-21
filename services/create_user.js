const UserSchema = require("../models/user");
const Create_user = async ({ email, password,name}) => {
    try {
        await UserSchema.create({ email, password,name });
    } catch (e) {
        console.log(e);
    }
}
module.exports=Create_user;