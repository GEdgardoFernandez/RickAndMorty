import React from "react";
import style from "./keyboard.module.css";
import Display from "../display/display";
import { useState } from "react";


const KeyBoard = function (props) {
	const [displayValue, setDisplayValue] = useState("");

	const handleButtonClick = (value) => {
		const updatedValue = (displayValue + value).slice(0, 4);
		setDisplayValue(updatedValue);
	  };


	function handleDelete() {
		// Borra el último dígito del display
		setDisplayValue(displayValue.slice(0, -1));
	}
	return (
		<div>
			<Display value={displayValue} />
			<table >
				<tbody className={style.tdLine}>

					<tr className={style.tdLine}></tr><tr className={style.tdLine}></tr><tr className={style.tdLine}></tr>

					<tr className={style.tdLine}>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(1)}>1</button></td>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(2)}>2</button></td>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(3)}>3</button></td>
					</tr>
					<tr className={style.tdLine}>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(4)}>4</button></td>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(5)}>5</button></td>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(6)}>6</button></td>
					</tr>
					<tr className={style.tdLine}>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(7)}>7</button></td>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(8)}>8</button></td>
						<td className={style.tdLine}>  <button className={style.botonesStyle} onClick={() => handleButtonClick(9)}>9</button></td>
					</tr>
					<tr className={style.tdLine}>
						<td className={style.tdLine}><button className={style.botonesStyle} onClick={() => handleDelete()}>←</button></td>
						<td className={style.tdLine}><button className={style.botonesStyle} onClick={() => handleButtonClick(0)}>0</button></td>
						<td className={style.tdLine}><button className={style.botonesStyle} onClick={() => props.onOk()}>√</button></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default KeyBoard;