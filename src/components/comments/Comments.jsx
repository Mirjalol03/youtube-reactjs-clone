import React from "react";
import Comment from '../comment/Comment'
import "./comments.scss";
const Comments = () => {
  const handleComment = () => {};

  return (
    <div className="comments">
      <p>1234 comments</p>

      <div className="comment__form d-flex w-100 my-2">
        <img
          className="rounded-circle mr-3"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          alt=""
        />

        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            className="flex-grow-1"
            type="text"
            placeholder="write a comment..."
          />

          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comment__list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
