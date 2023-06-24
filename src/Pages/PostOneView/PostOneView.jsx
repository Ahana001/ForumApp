import { useParams } from "react-router-dom";
import { SideBarStructure } from "../../Component/SideBarStructure/SideBarStructure";
import "./PostOneView.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { PostList } from "../../Component/PostList/PostList";

export function PostOneView() {
  const { postId } = useParams();
  const { state } = useContext(DataContext);
  const filterPost = state.posts.find((post) => post.postId === postId);

  if (!state.user || state.post === []) {
    return <h2>Loarding...</h2>;
  }

  return (
    <SideBarStructure>
      <PostList list={[filterPost]} />
    </SideBarStructure>
  );
}
