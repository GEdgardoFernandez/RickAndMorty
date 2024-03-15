import React from "react";
import style from "./keyloger.module.css";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateLastPass,
} from "..//..//assets/functions/functionValida.js";
const KeyBoard = function (props) {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const trueEmail = "guillermo@email.com";
  const truePassword = "1234password";
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
  
    // Validación del campo de email
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email";
    } else {
      newErrors.email = "";
    }
  
    // Validación del campo de password
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password !== truePassword) {
      newErrors.password = "Invalid password";
    } else {
      newErrors.password = "";
    }
  
    setErrors(newErrors); // Actualizar el estado de errores
  
    // Devolver verdadero si no hay errores
    return Object.values(newErrors).every((error) => error === "");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (trueEmail === form.email && truePassword === form.password) {
      navigate("/home");
    } else {
      alert("Login Fallido");
    }
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
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