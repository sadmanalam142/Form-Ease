import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { SiSpacex } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
        <div className="mt-16 flex items-center justify-between footer">
      <div className="flex flex-col">
        <div>
        <h1 className="text-5xl font-medium">
          <span className="title-letter">F</span>ormEase
        </h1>
        <div className="flex">
          <p className="logo-line"></p>
          <p className="uppercase text-xs font-medium">apply with ease</p>
          <p className="logo-line"></p>
        </div>
        </div>
        <div className="flex items-center justify-between mt-8"> 
        <BiLogoFacebookCircle className="size-8"></BiLogoFacebookCircle>
        <FaInstagram className="size-8"></FaInstagram>
        <SiSpacex className="size-8"></SiSpacex>
        <FaLinkedin className="size-8"></FaLinkedin>
        </div>
      </div>
      <div className="flex gap-8">
            <div>
                <p className="footer-text">About Us</p>
                <p className="footer-text">Sitemap</p>
                <p className="footer-text">Credits</p>
                <p className="footer-text">Help Center</p>
                <p className="footer-text">Comunity Guidlines</p>
            </div>
            <div>
                <p className="footer-text">Accessibility</p>
                <p className="footer-text">Mobile</p>
                <p className="footer-text">Marketing</p>
                <p className="footer-text">Advertising</p>
                <p className="footer-text">Report Issue</p>
            </div>
            <div>
                <p className="footer-text">Privacy Policy</p>
                <p className="footer-text">Terms & Conditions</p>
                <p className="footer-text">Trust & Safety</p>
            </div>
        </div>
        <div className="flex flex-col gap-6">
            <img className="ml-8" width={140} src={google} alt="" />
            <img className="ml-6" width={160} src={apple} alt="" />
        </div> 
    </div>
    <div className="ml-16 my-5">
    <p>All trademarks are the property of their respective owners</p>
    <p>All right reserved @ 2024 intallfie Tech Pvt. Ltd</p>
    </div>
    </div>
  );
};

export default Footer;
