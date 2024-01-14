import { FiAward } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import certificate from "../../assets/certificate.svg";

import "./Recommended.css";

const Recommended = () => {
  return (
    <div className="mx-20 mt-7">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Recommended exams</p>
        <p className="text-xl font-bold text-blue-600">See All</p>
      </div>

      <div className="flex justify-between gap-3 mt-7">

        <div className="exam-section">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img width={60} src={certificate} alt="" />
              <div>
                <p className="text-xl font-medium">JEE Mains 2023</p>
                <p>National Testing Agency</p>
              </div>
            </div>
            <FiAward className="text-blue-600 size-8 mb-8"></FiAward>
          </div>
          <p className="section-line"></p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <FaPeopleGroup className="size-8"></FaPeopleGroup>
            <p className="font-medium">More than 20 Lakhs</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 mr-24">
            <IoMdWallet className="size-8"></IoMdWallet>
            <p className="font-medium">$ 1200</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 ml-2">
            <p className="subject-catagory">Engineering</p>
            <p className="subject-catagory">IIT</p>
            <p className="subject-catagory">PCM</p>
          </div>
          <div className="flex items-center justify-center gap-3 mr-20 mt-2">
            <p className="font-medium text-blue-600">View details</p>
            <IoIosArrowForward className="font-medium text-blue-600"></IoIosArrowForward>
          </div>
        </div>

        <div className="exam-section">
          <div className="flex">
            <div className="flex items-start gap-4">
              <img width={60} src={certificate} alt="" />
              <div>
                <p className="text-xl font-medium">Civil Services 2023</p>
                <p>Union Public Service Commission</p>
              </div>
            </div>
            <FiAward className="text-blue-600 size-8 mb-8"></FiAward>
          </div>
          <p className="section-line"></p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <FaPeopleGroup className="size-8"></FaPeopleGroup>
            <p className="font-medium">More than 15 Lakhs</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 mr-24">
            <IoMdWallet className="size-8"></IoMdWallet>
            <p className="font-medium">$ 1500</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 mr-7">
            <p className="subject-catagory">Engineering</p>
            <p className="subject-catagory">PCM</p>
          </div>
          <div className="flex items-center justify-center gap-3 mr-20 mt-2">
            <p className="font-medium text-blue-600">View details</p>
            <IoIosArrowForward className="font-medium text-blue-600"></IoIosArrowForward>
          </div>
        </div>

        <div className="exam-section">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img width={60} src={certificate} alt="" />
              <div>
                <p className="text-xl font-medium">SSC CGL 2023</p>
                <p>Staff Selection Commission</p>
              </div>
            </div>
            <FiAward className="text-blue-600 size-8 mb-8"></FiAward>
          </div>
          <p className="section-line"></p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <FaPeopleGroup className="size-8"></FaPeopleGroup>
            <p className="font-medium">More than 10 Lakhs</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 mr-24">
            <IoMdWallet className="size-8"></IoMdWallet>
            <p className="font-medium">$ 1000</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 mr-7">
            <p className="subject-catagory">Engineering</p>
            <p className="subject-catagory">PCM</p>
          </div>
          <div className="flex items-center justify-center gap-3 mr-20 mt-2">
            <p className="font-medium text-blue-600">View details</p>
            <IoIosArrowForward className="font-medium text-blue-600"></IoIosArrowForward>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recommended;
