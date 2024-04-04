import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className=" md:mt-6 mt-3 mb-3 md:mb-4 font-poppins">
      <img className="block mx-auto" src={logo} alt="" />
      <h2 className="text-center font-poppins text-[18px] my-2 opacity-80">
        Journalism Without Fear or Favour
      </h2>
      <h2 className="text-center font-poppins opacity-80">
        {moment().format("dddd, MMMM D, YYYY")}
      </h2>
    </div>
  );
};

export default Header;
