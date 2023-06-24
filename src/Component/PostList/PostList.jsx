import "./PostList.css";

import { PostCard } from "../PostCard/PostCard";
import { useLocation, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { SortContainer } from "../SortContainer/SortContainer";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export function PostList({ list }) {
  const location = useLocation();
  const { state } = useContext(DataContext);

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
            <div> {state.sortBy.replaceAll("_", " ")} </div>
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
