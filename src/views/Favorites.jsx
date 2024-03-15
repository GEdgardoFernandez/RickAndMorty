import Favorite from "../components/favorite/favorite";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
const Favorites = () => {

    return (
        <div className="AppDetails">
            <div className="header">
                <Menu />
            </div>
            <Favorite />
            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Favorites