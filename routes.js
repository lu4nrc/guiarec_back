const express = require("express");
const GetPosts = require("./services/get_posts");
const CreatePost = require("./services/create_post");
const Delete_post = require("./services/delete_post");
const Login = require("./services/auth");
const Create_user = require("./services/create_user");
const Validate = require("./handles/validate");
const routes = express.Router();
routes.get("/posts/public", async (req, res) => {
    try {
        var posts = await GetPosts();
        res.json(posts);
    } catch (e) {
        res.status(500);
    }
})

routes.get("/posts", Validate,async (req, res) => {
    try {
        var posts = await GetPosts();
        res.json(posts);
    } catch (e) {
        res.status(500);
    }
})
routes.post("/posts", Validate, async (req, res) => {
    var {
        name,
        imageUrl,
        videoUrl,
        description, category } = req.body;
    try {
        await CreatePost({
            name,
            imageUrl,
            videoUrl,
            description, category
        });
        res.send().status(200);
    } catch (e) {
        res.status(500);
    }
})

routes.delete("/posts/:id", Validate, async (req, res) => {
    var {
        id } = req.params;
    try {
        await Delete_post({
            id
        });
        res.send().status(200);
    } catch (e) {
        res.status(500);
    }
})
routes.post("/auth/login", async (req, res) => {
    var {
        email,
        password,
    } = req.body;
    try {
        var data = await Login({ email, password });
        res.json(data).status(200);
    } catch (e) {
        if (e instanceof Error) {
            res.status(401);
            res.send(e.message);
        } else {
            res.send("Server error").statusCode(500);
        }
    }
})
/*
routes.post("/auth/signin", async (req, res) => {
    var {
        email,
        password,
    } = req.body;
    try {
        var data = await Create_user({ email, password });
        res.json(data).status(200);
    } catch (e) {
        if (e instanceof Error) {
            res.status(401);
            res.send(e.message);
        } else {
            res.send("Server error").statusCode(500);
        }
    }
})
*/

module.exports = routes;