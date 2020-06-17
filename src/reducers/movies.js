import data from "../db.json";
const [select, list] = data.components;

const initialState = {
  select: select,
  lists: list,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        lists: {
          ...state.lists,
          items: state.lists.items.sort((a, b) => {
            if (action.payload === "rank") {
              return a[action.payload] > b[action.payload] ? 1 : -1;
            } else {
              return a[action.payload] < b[action.payload] ? 1 : -1;
            }
          }),
        },
      };
    default:
      return state;
  }
};

export const sortlist = (orderBy) => ({
  type: "SORT",
  payload: orderBy,
});
