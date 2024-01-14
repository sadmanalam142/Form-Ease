import computer from "../../assets/analyzing-site.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner flex items-center justify-between">
      <IoIosArrowBack className="arrow"></IoIosArrowBack>
      <div className="flex items-center justify-center gap-12">
        <img width={150} src={computer} alt="" />
        <div>
          <p className="text-white text-5xl font-medium">GATE</p>
          <p className="text-white text-2xl ml-3 my-1 font-medium">RESULTS</p>
          <div className="flex ml-1">
            <p className="banner-line"></p>
            <p className="banner-year text-black">2022</p>
            <p className="banner-line"></p>
          </div>
        </div>
      </div>
      <IoIosArrowForward className="arrow"></IoIosArrowForward>
    </div>
  );
};

export default Banner;
