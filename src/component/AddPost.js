import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveData } from "../redux/actions/contryAction";

const AddPost = () => {
  const dispach = useDispatch();
  const initialState = {
    //userId: 0,
    //id: 0,
    title: "",
    error: {
      title: ""
    }
    // completed: false
  };
  const [formdata, setFormdata] = useState(initialState);
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //setFormdata(initialState);
    if (formdata.title === "") {
      //console.log(formdata);
      const error = {
        title: "fill the data"
      };
      setFormdata({ ...formdata, error });
    }

    if (formdata.title !== "") {
      console.log("sucess", formdata);
      delete formdata.error;
      dispach(saveData(formdata));
      setFormdata(initialState);
      console.log("sucess done", formdata);
    } else {
      console.log("error", formdata);
      //setFormdata(initialState);
      console.log("something wrong");
      //setFormdata(initialState);
    }
  };
  const handleBlur = (e) => {
    console.log("blur");
    //console.log(e.target.value);
    if (e.target.value === "") {
      //console.log(formdata);
      const error = {
        title: "fill the data"
      };
      setFormdata({ ...formdata, error });
    }
  };

  return (
    <>
      <h2>Add Form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="title"
            name="title"
            onBlur={handleBlur}
          />
          <br></br>
          <span style={{ color: "red" }}>{formdata.error.title}</span>
          <br></br>
          <button type="submit" value="submit">
            Add
          </button>
          <br></br>
        </form>
      </div>
    </>
  );
};

export default AddPost;
