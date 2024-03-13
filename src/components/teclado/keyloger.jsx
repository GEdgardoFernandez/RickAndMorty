import React from "react";
import style from "./keyloger.module.css";
import { useNavigate} from "react-router-dom";

const KeyBoard = function (props) {
	const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  }
  const trueEmail = "guillermo@email.com";
  const truePassword = "1234password";
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.email.value === trueEmail && event.target.password.value === truePassword) {
      navigate("/home");

    }else {
      alert("Login Fallido")
    }
  }
	return <form className={style.form} onSubmit={submitHandler}>
     <div className={style.formTitle}><span>sign in to your</span></div>
      <div className={style.title2}><span>RickAndMortyAPP</span></div>
      <div className={style.inputContainer}>
        <span className={style.formTitle}>Email: </span>
        <input className={style.inputMail}
         type="email" 
         placeholder="Enter email"
         onChange={handleChange}
         name="email"
         value={form.email}
        />
      </div>

      <section className={style.bgStars}>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
      </section>

      <div className={style.inputContainer}>
        <span className={style.formTitle}>Password: </span>

        <input className={style.inputPwd} 
        type="password" 
        placeholder="Enter password"
        onChange={handleChange}
        name="password"
        value={form.password}
        />
      </div>
      <button type="submit" className={style.submit}>
        <span className={style.signText}>Login</span>
      </button>

   </form>

	
}
export default KeyBoard;