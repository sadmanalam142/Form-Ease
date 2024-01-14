import computer from "../../assets/analyzing-site.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <IoIosArrowBack></IoIosArrowBack>
      <div className="flex items-center justify-center gap-12">
        <img width={100} src={computer} alt="" />
        <div>
          <p className="text-white">GATE</p>
          <p className="text-white">RESULTS</p>
          <div>
            <p className="banner-line text-white"></p>
            <p className="banner-year text-white">2022</p>
            <p className="banner-line text-white"></p>
          </div>
        </div>
      </div>
      <IoIosArrowForward></IoIosArrowForward>
    </div>
  );
};

export default Banner;
