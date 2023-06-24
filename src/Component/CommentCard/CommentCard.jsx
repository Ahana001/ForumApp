import "./CommentCard.css";

import { getHumanizeTimeForOlderPost } from "../../utils";
import { Avtar } from "../Avtar/Avtar";
import { BsDot } from "react-icons/bs";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { commentActionButtons } from "./constant";

export function CommentCard({ comment }) {
  const { state } = useContext(DataContext);
  const currentDate = new Date();

  return (
    <div className="CommentCardContainer">
      <div className="CommentUserInfoContainer">
        <Avtar url={comment.picUrl} />
        <div className="CommentUserInfo">
          <div className="CommentUser">
            <span> @ {comment.username}</span>
            <span>
              <BsDot />
              {getHumanizeTimeForOlderPost(currentDate, comment.createdAt)}
            </span>
          </div>
          <div className="CommentToUser">
            Reply to <span>@ {state?.user?.username}</span>
          </div>
          <div className="CommentContent">{comment.comment}</div>
          <div className="ActionButton">
            {commentActionButtons.map((button) => {
              return <div key={button.label}>{button.icon}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
