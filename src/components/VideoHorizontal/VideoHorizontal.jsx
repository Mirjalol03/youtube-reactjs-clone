import React from "react";
import "./VideoHorizontal.scss";
import moment from "moment";

import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import numeral from "numeral";
import { Row, Col } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal py-2 align-align-items-center">
      <Col xs={6} md={4} className="videoHprizontal__left">
        <LazyLoadImage
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail"
        />
        <span className="video__top__duration">{duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHprizontal__right">
        <p className="videoHorizontal__title mb-1">
          Become front end developer
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(10000).format("0.a")} Views •
          {moment("2023-05-05").fromNow()}{" "}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            effect="blur"
          /> */}
          <p>Backbench Coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
