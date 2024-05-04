import express from 'express';
import { server } from '../src/app.js'; 
import { router } from "./routes/index.js";

const PORT = 3001;

server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});