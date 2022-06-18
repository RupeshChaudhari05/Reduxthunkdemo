import { ADD_DATA, DELETE_DATA, LOAD_DATA } from "../../Constant";

const init = {
  contryList: [],
  isLoding: false
};

const contryListReducer = (state = init, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        isLoding: true,
        contryList: action.payload
      };
    case ADD_DATA:
      return {
        ...state,
        contryList: [...state.contryList, action.payload]
      };
    case DELETE_DATA:
      const del = state.contryList.filter((item) => item.id !== action.payload);
      return {
        ...state,
        contryList: del
      };
    default:
      return state;
  }
};

export default contryListReducer;
