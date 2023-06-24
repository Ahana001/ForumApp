import "./HomePage.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { SideBarStructure } from "../../Component/SideBarStructure/SideBarStructure";
import { PostList } from "../../Component/PostList/PostList";
import { useFilterDataHook } from "../../Hook/FilterDataHook";

export function HomePage() {
  const { state } = useContext(DataContext);
  const sortedPost = useFilterDataHook();

  if (!state.user || state.post === []) {
    return <h2>Loarding...</h2>;
  }
  return (
    <>
      <SideBarStructure>
        <PostList list={sortedPost} />
      </SideBarStructure>
    </>
  );
}
