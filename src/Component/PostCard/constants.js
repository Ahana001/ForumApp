import { FaShare } from "react-icons/fa";
import { BsBookmark, BsBookmarksFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

export const actionButtons = [
  {
    label: "comments",
    icon: <BiComment className="ActionButtonIcon" />,
  },
  {
    label: "share",
    icon: <FaShare className="ActionButtonIcon" />,
  },
  {
    label: "bookmark",
    icon: <BsBookmark className="ActionButtonIcon" />,
    selectedIcon: <BsBookmarksFill className="ActionSelectedButtonIcon" />,
  },
];
