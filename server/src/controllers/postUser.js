const { User } = require('../DB_connection');

const postUser = async (req, res) => {
   const { email, password } = req.body;

   // Validar si se recibieron email y contraseña
   if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
   }

   try {
      // Guardar el usuario en la base de datos
      const [user, created] = await User.findOrCreate({
         where: { email }, // Buscar usuario por email
         defaults: { password } // Si no existe, crearlo con el email y contraseña proporcionados
      });

      // Responder con el usuario guardado
      res.json(user);
   } catch (error) {
      // Manejar errores
      console.error(error);
      res.status(500).json({ message: error.message });
   }
};

module.exports = postUser;