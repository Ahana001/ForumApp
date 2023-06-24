import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { forumData } from "../Data/forumData";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionTypes.INITIAL_SET_USER,
      payload: {
        user: {
          username: forumData.username,
          name: forumData.name,
          accountId: forumData.accountId,
          picUrl: forumData.picUrl,
        },
      },
    });
    dispatch({
      type: ActionTypes.INITIAL_SET_POSTS,
      payload: { posts: forumData.posts },
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
