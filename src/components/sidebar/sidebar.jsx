import React from "react";
import "./sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUpAlt,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(log_out());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <ul className="sidebar-links">
        <Link to={'/' }>

        <li>
          <MdHome size={23} /> <span>Home</span>{" "}
        </li>
        </Link>
        <li>
          <MdSubscriptions size={23} /> <span>Subscription</span>{" "}
        </li>
        <li>
          <MdThumbUpAlt size={23} /> <span>LikedVideos</span>{" "}
        </li>
        <li>
          <MdHistory size={23} /> <span>History</span>{" "}
        </li>

        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I don`t know</span>
        </li>

        <hr />

        <li onClick={logoutHandler}>
          <MdExitToApp size={23} />
          <span>Log out</span>
        </li>
        <hr />
      </ul>
    </nav>
  );
};

export default Sidebar;
