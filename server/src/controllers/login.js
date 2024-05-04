const { User } = require('../DB_connection');

const login = async (req, res) => {
   const { email, password } = req.query;

   // Validar si se recibieron email y contraseña
   if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
   }

   try {
      // Buscar usuario por email
      const user = await User.findOne({ where: { email } });

      // Verificar si se encontró un usuario con el email proporcionado
      if (!user) {
         return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Verificar si la contraseña coincide
      if (user.password !== password) {
         return res.status(403).json({ message: "Contraseña incorrecta" });
      }

      // Contraseña correcta
      res.json({ access: true });
   } catch (error) {
      // Manejar errores
      console.error(error);
      res.status(500).json({ message: error.message });
   }
};

module.exports =  login 