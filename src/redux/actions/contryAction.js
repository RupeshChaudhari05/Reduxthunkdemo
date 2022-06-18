import axios from "axios";
import { ADD_DATA, LOAD_DATA, SAVE_DATA } from "../../Constant";

export const getData = () => {
  console.log("asc1");
  return async function (dispach, action) {
    console.log("asc");
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const result = await data.data;
    console.log(result);
    const get = result.map((item, index) => {
      delete item.id;
      delete item.userId;
      delete item.completed;
      return item;
    });
    dispach({
      type: LOAD_DATA,
      payload: get
    });
  };
};

export const getAllProduct = () => {
  return async function (dispach, action) {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const result = await data.data;
      // dispach({ type: GET_PRODUCTS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveData = (data) => {
  console.log("sdd", data);
  return {
    type: ADD_DATA,
    payload: data
  };
};
