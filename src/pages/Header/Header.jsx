import "./Header.css";

const Header = () => {
  return (
    <div className="flex items-center justify-evenly">
      <div className="flex flex-col items-center ml-12">
        <h1 className="text-5xl font-medium"><span className="title-letter">F</span>ormEase</h1>
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
      <div className="flex gap-4 search-box">
        <p>search logo</p>
        <p>Search exams here</p>
      </div>
    </div>
  );
};

export default Header;
