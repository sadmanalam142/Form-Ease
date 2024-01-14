import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly pt-7">
        <div className="flex flex-col items-center ml-12">
          <h1 className="text-5xl font-medium">
            <span className="title-letter">F</span>ormEase
          </h1>
          <div className="flex">
            <p className="logo-line"></p>
            <p className="uppercase text-xs font-medium">apply with ease</p>
            <p className="logo-line"></p>
          </div>
        </div>
        <p className="text-2xl font-medium text-blue-600">Home</p>
        <p className="text-2xl font-medium">Result</p>
        <p className="text-2xl font-medium">FAQ</p>
        <p className="text-2xl font-medium">About Us</p>
        <p className="text-2xl font-medium">Contact Us</p>
        <div className="flex items-start gap-2 search-box">
          <CiSearch className="size-7"></CiSearch>
          <p>Search exams here</p>
        </div>
        <GoBell className="size-8 text-blue-600"></GoBell>
        <CgProfile className="size-14 mr-12"></CgProfile>
      </div>
      <p className="header-line"></p>
    </div>
  );
};

export default Header;
