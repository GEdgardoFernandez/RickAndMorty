import express from 'express';
import { server } from './app.js';
const PORT = 3001;
import {router} from "./routes/index.js"


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 
 server.use('/rickandmorty', router);

 server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });