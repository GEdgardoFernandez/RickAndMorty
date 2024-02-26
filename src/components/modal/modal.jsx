import React, { useState } from "react";
import style from "./modal.module.css";
import KeyBoard from "../teclado/keyboard";


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
      <h1>MODAL PRUEBA</h1>
      <KeyBoard onOk={handleVerification} onDelete={handleDelete} setDisplayValue={setDisplayValue} />
    </div>
  );
};

export default Modal;