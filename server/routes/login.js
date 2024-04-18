import users from "../utils/users.js";
const login = (req, res) => {
    const access = false;
    let { email, password } = req.query;
    console.log("EMAIL", email, password);
    users.forEach(users => {
       if(email === users.email && password === users.password) {
           access = true;
       }
    });
    return res.status(200).json({ access});
}

export { login }