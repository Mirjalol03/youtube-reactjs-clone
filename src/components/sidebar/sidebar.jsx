import React from "react";
import "./sidebar.scss";
import { MdExitToApp } from "react-icons/md";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../utils/navbar";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const [active, setActive] = React.useState(1);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(log_out());
  };

  const handleChangeActive = (itemLink, itemId) => {
    if (itemLink === "/") {
      setActive(1);
    } else {
      setActive(itemId);
    }
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <ul className="sidebar-links">
        {navbarLinks.main.length > 0 &&
          navbarLinks.main.map((item) => (
            <Link
              onClick={() => handleChangeActive(item.link, item.id)}
              to={item.link}
              className={`item-link ${item.id === active ? "active" : ""}`}
              key={item.id}
            >
              <li className="side-menu__items__item">
                <item.icon></item.icon>

                <span>{item.text}</span>
              </li>
            </Link>
          ))}

        <hr />

        {navbarLinks.secondary.length > 0 &&
          navbarLinks.secondary.map((item) => (
            <Link
              onClick={() => handleChangeActive(item.link, item.id)}
              to={item.link}
              className={`item-link secondary-item ${item.id === active ? "active" : ""}`}
              key={item.id}
            >
              <li className="side-menu__items__item">
                <item.icon></item.icon>

                <span>{item.text}</span>
              </li>
            </Link>
          ))}
        <li className="secondary-item">
          <ExpandMoreOutlinedIcon />
          <span>Show more</span>
        </li>

        <hr className="secondary-item"/>

        <li onClick={logoutHandler}>
          <MdExitToApp size={23} />
          <span>Log out</span>
        </li>
        {/* <hr /> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
