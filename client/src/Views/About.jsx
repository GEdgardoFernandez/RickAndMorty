import Menu from "../components/menu/Menu"
import Switch from "../components/switch/Switch"
import Footer from "../components/footer/Footer"
import React from "react"
import imagen from "..//..//src/assets/fondos/fotoGuille.png"
import { useNavigate } from "react-router-dom"
const About = () => {
   const navigate = useNavigate()
   return (
      <div>
         <div className='header'>
            <Menu />
         </div>
         <br />
         <div className='about'>
            <div>
               <div className="contarinerAbout">
                  <button className="buttonAbout" onClick={() => navigate("/home")}>X</button>
                  <div>
                     <div className="infoAbout">
                        <h2>Name: </h2>
                        <p className="elementoPAbout">Guillermo</p>
                     </div>
                     <div className="infoAbout">
                        <h2>Status: </h2>
                        <p className="elementoPAbout">Alive</p>
                     </div>
                     <div className="infoAbout">
                        <h2>Specie: </h2>
                        <p className="elementoPAbout">Human</p>
                     </div>
                     <div className="infoAbout">
                        <h2>Gender: </h2>
                        <p className="elementoPAbout">Masculino</p>
                     </div>
                     <div className="infoAbout">
                        <h2>Origin: </h2>
                        <p className="elementoPAbout">Hearth</p>
                     </div>
                  </div>
                  <div>
                     <img src={imagen} alt='Personaje' className="imgAbout" />
                  </div>
                  <div className="infoAbout">
                     <button className="buttonAbout" onClick={() => navigate("/details")}>
                        <span className="spanAbout">View more</span>
                     </button>
                  </div>
               </div>
            </div>

         </div>
         <br />
         <Footer />
      </div>
   )
}

export default About