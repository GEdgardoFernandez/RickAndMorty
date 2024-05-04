const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
   const { id ,name, origin, status, image, species, gender } = req.body;

   // Validar si se recibieron todos los datos requeridos
   if (!id || !name || !origin || !status || !image ||!gender) {
      console.log(id ,name, origin, status, image, species, gender)
      return res.status(401).json({ message: "Faltan datos" });
   }
   try {
      // Guardar el personaje favorito en la base de datos
      await Favorite.create({ name, origin, status, image, species, gender });
      // Buscar todos los personajes favoritos guardados en la base de datos
      const favorites = await Favorite.findAll();
      // Responder con el arreglo de personajes favoritos
      res.json(favorites);
   } catch (error) {
      // Manejar errores
      console.error(error);
      res.status(500).json({ message: error.message });
   }
};

module.exports = postFav;