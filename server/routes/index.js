
import { Router } from "express";
import { getCharById } from "../controllers/getCharById.js";
import { postFav, deleteFav } from "../controllers/handleFavorites.js";
import { login } from "../routes/login.js";
import express from "express";

Router.get("/character/:id", (req, res) => {
    getCharById(req, res);
});
Router.get("/login", (req, res) => {
    login(req, res);
})
Router.post("/fav", (req, res) => {
    postFav(req, res);
})
Router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
})

export {Router}