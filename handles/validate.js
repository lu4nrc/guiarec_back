const { request } = require("express");
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config()
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const Validate = (req, res, next) => {
    try {
        const [, token] = req.headers.authorization?.split(" ") || ["", ""];
        if (!token) throw new Error("Access denied, no token provided.");
        const payload = jsonwebtoken.verify(token, PRIVATE_KEY);
        const userIdFromToken = typeof payload !== "string" && payload.user;
        if (!userIdFromToken) {
            throw new Error("Invalid token!");
        }
        request.headers['user'] = payload.user;
        next();
    } catch (e) {
        res.status(401).json({message:e.toString(), status: 401})
    }

}
module.exports = Validate;