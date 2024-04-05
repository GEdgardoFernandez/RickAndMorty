import http from 'http';
import getCharById from './controllers/getCharById.js';
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;
/* 
    if (url.includes('/rickandmorty/character')) {
        const id = url.split('/').pop();
        const characterId = parseInt(id);
        if (!isNaN(characterId)) {
            const character = datos.find(character => character.id === characterId);
            console.log(character);
            if (character) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(character));
                return;
            }
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Personaje no encontrado');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no válida');
    } */
    if(url.includes('/rickandmorty/character')){
        const id = url.split('/').pop();
        const characterId = parseInt(id);
        getCharById(res, characterId);
        return;
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no válida');
    }
});

server.listen(3001, () => {
    console.log('Servidor en funcionamiento en el puerto 3001');
    
});