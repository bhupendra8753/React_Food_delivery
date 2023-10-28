import logo from "../../assets/logo.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
   
  //const data = useContext(UserContext); //This can be destructed as below
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-pink-300 shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3"> 
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;