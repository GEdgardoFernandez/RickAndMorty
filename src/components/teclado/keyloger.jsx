import React from "react";
import style from "./keyloger.module.css";


const KeyBoard = function (props) {
	
	return <form className={style.form}>
     <div className={style.formTitle}><span>sign in to your</span></div>
      <div className={style.title2}><span>RickAndMortyAPP</span></div>
      <div className={style.inputContainer}>
        <input className={style.inputMail} type="email" placeholder="Enter email"/>
        <span> </span>
      </div>

      <section className={style.bgStars}>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
      </section>

      <div className={style.inputContainer}>
        <input className={style.inputPwd} type="password" placeholder="Enter password"/>
      </div>
      <button type="submit" className={style.submit}>
        <span className={style.signText}>Login</span>
      </button>

   </form>

	
}
export default KeyBoard;