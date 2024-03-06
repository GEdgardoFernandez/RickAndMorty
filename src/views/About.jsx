import Menu from "../components/menu/Menu"
import SearchBar from "../components/searchbar/SearchBar"
import Switch from "../components/switch/Switch"
import Footer from "../components/footer/Footer"
import React from "react"
import Card from "../components/card/Card"
const About = () => {
    return (
        <>
            <div className='header'>
                <Menu />
                <SearchBar onSearch={(characterID) => window.alert(characterID)} />
                <Switch />
            </div>

            <div className='container'>
                <Card  />
            </div>
            <Footer />
        </>
    )
}

export default About