import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { SortBy } from "../Reducer/DataReducer";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);
  let sortedPost = state.posts;
  // eslint-disable-next-line default-case
  switch (state.sortBy) {
    case SortBy.Latest_Post: {
      sortedPost = sortedPost.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });

      break;
    }
    case SortBy.Most_Upvoted_Posts: {
      sortedPost = sortedPost.sort((a, b) => {
        const voteA = a.upvotes - a.downvotes;
        const voteB = b.upvotes - b.downvotes;
        return voteA - voteB;
      });

      break;
    }
  }
  return sortedPost;
};
