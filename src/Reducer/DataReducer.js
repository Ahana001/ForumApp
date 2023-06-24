export const ActionTypes = {
  INITIAL_SET_POSTS: "INITIAL_SET_POSTS",
  INITIAL_SET_USER: "INITIAL_SET_USER",
  SET_POST: "SET_POST",
  SET_SORT_BY: "SET_SORT_BY",
};
export const SortBy = {
  Latest_Post: "Latest_Post",
  Most_Upvoted_Posts: "Most_Upvoted_Posts",
};
export const initialState = {
  posts: [],
  user: null,
  sortBy: SortBy.Latest_Post,
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_POSTS: {
      result = {
        ...state,
        posts: action.payload.posts,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_USER: {
      result = {
        ...state,
        user: action.payload.user,
      };
      break;
    }
    case ActionTypes.SET_POST: {
      const updatedPosts = state.posts.map((post) => {
        return post.postId === action?.payload?.post?.postId
          ? action?.payload?.post
          : post;
      });
      result = {
        ...state,
        posts: updatedPosts,
      };
      break;
    }
    case ActionTypes.SET_SORT_BY: {
      result = {
        ...state,
        sortBy: action.payload.sortBy,
      };
      break;
    }
  }
  return result;
}
