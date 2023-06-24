import { useLocation } from "react-router-dom";
import "./SortContainer.css";
import { ActionTypes, SortBy } from "../../Reducer/DataReducer";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export function SortContainer() {
  const location = useLocation();
  const { state, dispatch } = useContext(DataContext);

  return (
    <div
      className="SortWrapper"
      style={{ display: location.pathname === "/" ? "flex" : "none" }}
    >
      <h2>Sort By</h2>
      <select
        className="SortByContainer"
        defaultValue={state.sortBy}
        onChange={(e) => {
          dispatch({
            type: ActionTypes.SET_SORT_BY,
            payload: {
              sortBy: e.target.value,
            },
          });
        }}
      >
        <option value={SortBy.Latest_Post}>Latest Posts</option>
        <option value={SortBy.Most_Upvoted_Posts}>Most Upvoted Posts</option>
      </select>
    </div>
  );
}
