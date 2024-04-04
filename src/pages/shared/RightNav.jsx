import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from "../../assets/1.png";
import qzone2 from "../../assets/2.png";
import qzone3 from "../../assets/3.png";
const RightNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h2 className="text-3xl font-bold">Login With</h2>
        <button className="btn btn-outline   w-full">
          <FaGoogle size={20}></FaGoogle> Log in with google
        </button>
        <button className="btn btn-outline  w-full">
          <FaGithub size={20}></FaGithub> Log in with GitHub
        </button>
      </div>
      <div className="p-4 ">
        <h2 className="text-3xl mb-3 font-bold">Find Us On</h2>
        <a className="flex  p-4 items-center gap-2 font-semibold border rounded-t-lg">
          <FaFacebook size={20}></FaFacebook> Facbook
        </a>
        <a className="flex p-4 items-center border-x  gap-2 font-semibold border rounded-t-lg">
          <FaTwitter size={20}></FaTwitter> Twitter
        </a>
        <a className="flex p-4 items-center gap-2 font-semibold border rounded-b-lg">
          <FaInstagram size={20}></FaInstagram> Instagram
        </a>
      </div>
      {/* Q Zone */}
      <div className="bg-[#F3F3F3] space-y-5 p-5">
        <div className="bg-white rounded-lg p-3  space-y-2">
          <img
            className="block mx-auto bg-white rounded-lg "
            src={qzone1}
            alt=""
          />
          <h3 className="text-center font-semibold">Swimming</h3>
        </div>
        <div className="p-3 space-y-2">
          <img className="block mx-auto" src={qzone2} alt="" />
          <h3 className="text-center font-semibold">Class</h3>
        </div>
        <div className="p-3 space-y-2">
          <img className="block mx-auto" src={qzone3} alt="" />
          <h3 className="text-center font-semibold">Play Ground</h3>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
