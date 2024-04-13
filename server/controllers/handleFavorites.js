

let myFavorites = [];
const postFav = (req, res) => {
    const { id } = req.body;
    myFavorites.push(id);
    res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.forEach((fav) => {
        if (fav.id === id) {
            myFavorites.splice(fav, 1);
            return res.status(200).json(myFavorites);
        }
    })
}

export {postFav, deleteFav} 