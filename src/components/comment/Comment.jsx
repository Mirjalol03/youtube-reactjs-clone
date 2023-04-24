import React from "react";
import moment from "moment";
import './comment.scss'

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        className="rounded-circle mr-3"
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        alt=""
      />

      <div className="comment__body">
        <p
          className="comment__header
          mb-1
            "
        >
          Orifjnov Abbosbek • {moment("2023-05-05").fromNow()}
        </p>
        <p>Nice vide!!!</p>
      </div>
    </div>
  );
};

export default Comment;
