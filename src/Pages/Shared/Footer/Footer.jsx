import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import facebookLogo from"../../../../public/images/logos/facebook logo.svg"
import instagramLogo from"../../../../public/images/logos/instagram logo.svg"
import twitterLogo from "../../../../public/images/logos/twitter logo.svg"
import storeLogo from "../../../../public/images/logos/playstore and app store.png"

const Footer = () => {
  return (
    <div>
      <div className="w-full py-7 text-white bg-gray-900 px-64">
      <div className="flex justify-between">
        <div className="w-64">
          <h1 className="mb-4 text-4xl font-extrabold">Alloy.com</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore
            facilis laboriosam dolorem necessitatibus!
          </p>
          <p className="mb-4">Follow us on</p>
          <img
            className="w-8 cursor-pointer inline-block"
            src={facebookLogo}
            alt=""
          />
          <img
            className="w-8 mx-5  cursor-pointer inline-block"
            src={instagramLogo}
            alt=""
          />
          <img
            className="w-8 cursor-pointer inline-block"
            src={twitterLogo}
            alt=""
          />
        </div>

        <div className="w-44">
          <p className="mb-4">Contact Us</p>
          <p className="mb-4">House #8, Road # 14,Dhanmondi, Dhaka-1209.</p>
          <p>Email: support@alloy.com</p>
        </div>
        <div className="w-36">
          <h1 className="mb-4">Let Us Help You</h1>
          <Link className="mb-4" to={""}>Your Account</Link>
          <Link className="mb-4" to={""}>Your Order</Link>
          <Link className="mb-4" to={""}>Terms & Conditions</Link>
          <Link className="mb-4" to={""}>Return & Refund Policy</Link>
          <Link className="mb-4" to={""}>FAQ</Link>
        </div>
        <div className="w-36">
          <h1 className="mb-4">Get Alloy App</h1>
          <img className="cursor-pointer" src={storeLogo} alt="" />
        </div>
      </div>
      </div>
      
      <div className="w-full  text-center py-5  text-white bg-gray-800 m-0">
        <p> alloy.com Limited. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
