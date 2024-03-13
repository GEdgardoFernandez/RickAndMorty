import Menu from "../components/menu/Menu";
import SearchBar from "../components/searchbar/SearchBar";
import Switch from "../components/switch/Switch";
import Footer from "../components/footer/Footer";
import Cards from "../components/cards/Cards";
import characters from "../data.js";

const Home = () => {
    return (
        <>
            <div className='header'>
                <Menu />
                <SearchBar  />
                <Switch />
            </div>

            <div className='container'>
                <Cards characters={characters} />
            </div>
            <Footer />
        </>
    )
}

export default Home