import Banner from "../Banner/Banner";
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
        </>
    );
};

export default Home;