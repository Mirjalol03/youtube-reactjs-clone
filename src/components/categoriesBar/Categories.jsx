import React, { useState } from "react";
import "./categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategories,
} from "../../redux/actions/videos.action";
const Categories = () => {
  const keywords = [
    "All",
    "Musics",
    "Popular Videos",
    "react js",
    "vue js",
    "angular js",
    "coding",
    "cricket",
    "Footbal",
    "Wall street",
  ];
  const [active, setActive] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActive(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    }else{

      dispatch(getVideosByCategories(value));
    }
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, index) => (
        <span
          className={active === value ? "active" : ""}
          onClick={() => handleClick(value)}
          key={index}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories;
