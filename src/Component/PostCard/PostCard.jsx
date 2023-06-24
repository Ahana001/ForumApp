import "./PostCard.css";

import { Avtar } from "../Avtar/Avtar";

import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { CommentCard } from "../CommentCard/CommentCard";

import { actionButtons } from "./constants";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { getHumanizeTimeForOlderPost } from "../../utils";

export function PostCard({ post }) {
  const { dispatch } = useContext(DataContext);
  const location = useLocation();

  const currentDate = new Date();

  return (
    <>
      <div className="PostCardContainer">
        <div className="VoteContainer">
          <BiSolidUpArrow
            className="VoteIcon"
            onClick={() => {
              dispatch({
                type: ActionTypes.SET_POST,
                payload: {
                  post: { ...post, upvotes: post.upvotes + 1 },
                },
              });
            }}
          />
          <span>{post.upvotes - post.downvotes}</span>
          <BiSolidDownArrow
            className="VoteIcon"
            onClick={() => {
              dispatch({
                type: ActionTypes.SET_POST,
                payload: {
                  post: { ...post, upvotes: post.upvotes - 1 },
                },
              });
            }}
          />
        </div>
        <div className="PostDetailsContainer">
          <div className="PostUserInfoContainer">
            <Avtar url={post.picUrl} />
            <div>
              <div className="PostUserInfo">
                Posted by <span>@ {post.username}</span>
                <span>
                  {" "}
                  <BsDot />{" "}
                  {getHumanizeTimeForOlderPost(currentDate, post.createdAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="PostHeader">{post.post}</div>
          <div className="PostTags">
            {post.tags.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
          <div className="PostContent">{post.postDescription}</div>
          <div className="ActionButton">
            {actionButtons.map((button) => {
              if (button.label === "bookmark") {
                return (
                  <div
                    key={button.label}
                    onClick={() => {
                      dispatch({
                        type: ActionTypes.SET_POST,
                        payload: {
                          post: { ...post, isBookmarked: !post.isBookmarked },
                        },
                      });
                    }}
                  >
                    {post.isBookmarked ? button.selectedIcon : button.icon}
                  </div>
                );
              } else if (button.label === "comments") {
                return (
                  <Link to={`/comments/${post.postId}`} key={button.label}>
                    {button.icon}
                  </Link>
                );
              } else {
                return <div key={button.label}>{button.icon}</div>;
              }
            })}
          </div>
        </div>
      </div>
      <div
        className="PostCommentsContainer"
        style={{
          display: location.pathname.includes("/comments") ? "flex" : "none",
        }}
      >
        {post.comments.map((comment) => {
          return (
            <>
              <CommentCard comment={comment} key={comment.commentId} />
            </>
          );
        })}
      </div>
    </>
  );
}
