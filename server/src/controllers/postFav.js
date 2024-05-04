const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
   const { id, name, origin, status, image, species, gender } = req.body;

   if (!id || !name || !origin || !status || !image || !gender) {
      console.log(id, name, origin, status, image, species, gender)
      return res.status(401).json({ message: "Faltan datos" });
   }
   try {
      await Favorite.create({ name, origin, status, image, species, gender });
      const favorites = await Favorite.findAll();
      res.json(favorites);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
   }
};

module.exports = postFav;