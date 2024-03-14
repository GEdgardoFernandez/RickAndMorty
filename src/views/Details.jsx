import CardDetails from "../components/cardDetails/CardDetails"
import Footer from "../components/footer/Footer"

const Details = () => {
    return <div className="AppDetails">
        <div className="container">
            <h1 className="title">Details of character</h1>
        </div>
        <div className="container">
            <CardDetails />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
}

export default Details