import express from 'express';
const router = express.Router();
import { getCharById } from "../controllers/getCharById.js";
import { postFav, deleteFav } from "../controllers/handleFavorites.js";
import { login } from "./login.js";

router.get("/character/:id", (req, res) => {
    getCharById(req, res);
})
router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
})
router.post("/fav", (req, res) => {
    postFav(req, res);
})
router.use("/login", (req, res) => {
    login(req, res);
})



export {router}