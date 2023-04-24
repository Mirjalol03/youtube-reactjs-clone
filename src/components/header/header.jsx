import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useSelector } from "react-redux";
import { USER_INFO } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/YT-Black.png';

const Header = ({ handleToggleSidebar }) => {
  const selector = useSelector((state) => state.auth);
  console.log(selector);
  const user = JSON.parse(localStorage.getItem(USER_INFO));

  const Navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = e.target[0].value;

    if (query) {
      Navigate(`/search/${query}`);
    }

  }

  return (
    <div className="border header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
        style={{ cursor: "pointer" }}
      />
      <Link to={'/'}>
      <img src={logo} alt="" className="header__logo color-white" />
      </Link>
      <form onSubmit={(e) => handleSearch(e)}>
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
