import users from "../utils/users.js";
const login = (req, res) => {
    const access = false;
    const { email, password } = req.query;
    email === users.email && password === users.password ?
    res.status(200).json({ access: true }) 
    :res.status(401).json({ access: false });
}

export { login }