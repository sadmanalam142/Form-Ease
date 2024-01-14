import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Recent from "../Recent/Recent";
import Recommended from "../Recommended/Recommended";


const Home = () => {
    return (
        <>
        <Header></Header>
        <Banner></Banner>
        <Recommended></Recommended>
        <Recent></Recent>
        <Footer></Footer>
        </>
    );
};

export default Home;