const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
   const { id } = req.params;

   try {
      // Eliminar el personaje favorito de la tabla
      await Favorite.destroy({ where: { id } });

      // Buscar todos los personajes favoritos restantes en la base de datos
      const favorites = await Favorite.findAll();

      // Responder con el arreglo de personajes favoritos
      res.json(favorites);
   } catch (error) {
      // Manejar errores
      console.error(error);
      res.status(500).json({ message: error.message });
   }
};

module.exports = deleteFav;