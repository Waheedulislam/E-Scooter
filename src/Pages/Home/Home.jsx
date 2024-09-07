import Colors from "../../Components/Home/Colors";
import Features from "../../Components/Home/Features";
import NewsLetter from "../../Components/Home/NewsLetter";
import ProductInformation from "../../Components/Home/ProductInformation";
import Testimonials from "../../Components/Home/Testimonials";
import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Features />
            <ProductInformation />
            <Colors />
            <Testimonials />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;