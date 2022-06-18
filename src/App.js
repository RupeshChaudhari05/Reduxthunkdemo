import { useEffect } from "react";
import Home from "./component/Home";
import { getData } from "./redux/actions/contryAction";
import "./styles.css";

export default function App() {
  //const dispach = useDispatch();

  useEffect(() => {
    getData();
    console.log("dsfsdf");
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}
