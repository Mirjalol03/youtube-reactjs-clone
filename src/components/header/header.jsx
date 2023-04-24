import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useSelector } from "react-redux";
import { USER_INFO } from "../../utils/constants";

const Header = ({ handleToggleSidebar }) => {
  const selector = useSelector((state) => state.auth);
  console.log(selector);
  const user = JSON.parse(localStorage.getItem(USER_INFO));

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
        style={{ cursor: "pointer" }}
      />
      <img src={Logo} alt="" className="header__logo color-white" />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications />
        <MdApps />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
