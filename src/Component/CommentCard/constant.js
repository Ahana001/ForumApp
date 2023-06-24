import { FaShare } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

export const commentActionButtons = [
  {
    label: "like",
    icon: <AiOutlineHeart className="ActionButtonIcon" />,
  },
  {
    label: "comments",
    icon: <BiComment className="ActionButtonIcon" />,
  },
  {
    label: "share",
    icon: <FaShare className="ActionButtonIcon" />,
  },
];
