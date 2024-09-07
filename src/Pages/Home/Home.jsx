import Colors from "../../Components/Home/Colors";
import NewsLetter from "../../Components/Home/NewsLetter";
import Testimonials from "../../Components/Home/Testimonials";
import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Colors />
            <Testimonials />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;