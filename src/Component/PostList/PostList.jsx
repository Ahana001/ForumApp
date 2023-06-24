import "./PostList.css";

import { PostCard } from "../PostCard/PostCard";
import { useLocation, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { SortContainer } from "../SortContainer/SortContainer";

export function PostList({ list }) {
  const location = useLocation();
  return (
    <>
      <div className="PostListContainer">
        {location.pathname.includes("/comments") ? (
          <div className="PostListHeader">
            <Link to="/">
              <BiArrowBack className="BackArrow" />
            </Link>
            <div>Post</div>
          </div>
        ) : (
          <div className="PostListHeader">
            <div> Posts </div>
          </div>
        )}
        <ul>
          {list.map((post) => {
            return (
              <li key={post.postId}>
                <PostCard post={post} />
              </li>
            );
          })}
        </ul>
      </div>
      <SortContainer />
    </>
  );
}
