const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config()
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const UserSchema = require("../models/user");
const Login = async ({ email, password }) => {
    var user = await UserSchema.findOne({email:email,password:password});
    if (!user) throw new Error ( "User not found or incorrect password")
    const token = jsonwebtoken.sign(
        { user: JSON.stringify(user) },
        PRIVATE_KEY,
        { expiresIn: "10h" }
    );
    const data = {
        user,
        token
    }
    return data;
}
module.exports = Login;