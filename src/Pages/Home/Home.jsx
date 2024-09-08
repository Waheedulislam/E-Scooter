import Colors from "../../Components/Home/Colors";
import Features from "../../Components/Home/Features";
import HighEfficiencyMotor from "../../Components/Home/HighEfficiencyMotor";
import MultipleAccessories from "../../Components/Home/MultipleAccessories";
import MultipleAccessories2 from "../../Components/Home/MultipleAccessories2";
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
            <HighEfficiencyMotor />
            <MultipleAccessories />
            <MultipleAccessories2 />
            <Colors />
            <Testimonials />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;