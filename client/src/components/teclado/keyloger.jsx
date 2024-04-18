import React, { useEffect } from "react";
import style from "./keyloger.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const KeyBoard = function (props) {
  const truePassword = "pass1234";
  const navigate = useNavigate();
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });
  const [access, setAccess] = React.useState(false);
  useEffect(() => {
    !access && navigate("/");
  },[access, navigate])

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    setForm({ ...form, [property]: value });
    setErrors(validateForm({...form, [property]: value}))
  };


  const validateForm = (form) => {
    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!regexEmail.test(form.email)) {
      newErrors.email = "Invalid email";
    } else {
      newErrors.email = "";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password !== truePassword) {
      newErrors.password = "Invalid password";
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);


    return Object.values(newErrors).every((error) => error === "");
  };
console.log(form.email, form.password)
  function login(UserData) {
   const { email, password } = UserData
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    }).catch(error => {
      console.error("Error de inicio de sesion:", error);
    })
 }
 const handleSubmit  = (event) => {
  event.preventDefault();
  login(form);
 }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formTitle}>
        <span>sign in to your</span>
      </div>
      <div className={style.title2}>
        <span>RickAndMortyAPP</span>
      </div>
      <div className={style.inputContainer}>
        <span className={style.formTitle}>Email: </span>
        <input
          className={style.inputMail}
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
          value={form.email}
        />
        <p className={errors.email && style.error}>{errors.email}</p>
      </div>

      <section className={style.bgStars}>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
      </section>

      <div className={style.inputContainer}>
        <span className={style.formTitle}>Password: </span>

        <input
          className={style.inputPwd}
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          name="password"
          value={form.password}
        />
        <p className={errors.password && style.error}>{errors.password}</p>
      </div>
      <button type="submit" className={style.submit}>
        <span className={style.signText}>Login</span>
      </button>
    </form>
  );
};

export default KeyBoard;