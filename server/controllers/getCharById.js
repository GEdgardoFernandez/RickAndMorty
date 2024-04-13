

const getCharById = (req, res) => {

    const {id} = req.params;
    const apiUrl = `https://rym2.up.railway.app/api/character/${id}?key=GEdgardoFernandez`;

    axios.get (apiUrl).then(response => {
        const {name, gender, species, origin, image, status} = response.data;
        const character = {
            id: id,
            name: name,
            gender: gender,
            species: species,
            origin: origin,
            image: image,
            status: status
        };
        console.log("character:", character);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
    }) 
    .catch(error => {
        return res.status(400).send({ error: error.message });
    })
}

export {getCharById}