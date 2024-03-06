import React, { useState } from "react";
import style from "./modal.module.css";
import KeyBoard from "../teclado/keyloger";


const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [displayValue, setDisplayValue] = useState("");

  const handleVerification = () => {
    console.log("Código ingresado:", displayValue);
    if (displayValue === '0137') {
      alert("Código incorrecto. Intenta de nuevo.");

    } else {
      alert("Código correcto. ¡Bienvenido!");
      handleCloseModal();

    }
  };

  const handleCloseModal = () => {
    console.log("Cerrando modal");
    setIsModalOpen(false);
  };
  const handleDelete = () => {
    // Lógica para borrar el último dígito
    setDisplayValue(displayValue.slice(0, -1));
  };
  const modalStyles = {
    display: isModalOpen ? 'flex' : 'none',
    // Otros estilos aquí si es necesario
  };

  return (
    <div style={modalStyles} className={style.containerModal}>
      <KeyBoard onOk={handleVerification} onDelete={handleDelete} setDisplayValue={setDisplayValue} />
      <br />
      <section className={style.bgStars}>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
        <span className={style.star}></span>
      </section>
    </div>
  );
};

export default Modal;