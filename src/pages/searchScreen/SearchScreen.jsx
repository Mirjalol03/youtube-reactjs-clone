import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../api";
import "./searchScreen.scss";

const SearchScreen = () => {
  const query = useParams().query;

  const [videos, setVideos] = React.useState([]);

  const Navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: query,
        type: "video",
      },
    });
    console.log(data.items);
    setVideos(data.items);
  };

  const handleVideoClick = (id) => {
    console.log(id);

    Navigate(`/watch/${id}`);
  };

  React.useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="search">
      <h1>query: {query}</h1>

      <div className="search__videos">
        {videos.length > 0 &&
          videos.map((video, index) => (
            <div className="search__video" key={index}>
              <div
                className="search__video-thumbnail"
                onClick={() => {
                  handleVideoClick(video.id.videoId);
                }}
              >
                <img src={video.snippet.thumbnails.high.url} alt="" />
              </div>
              <p>{video.snippet.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchScreen;
