import { useSelector } from "react-redux";
import AddPost from "./AddPost";

const Home = () => {
  const alldata = useSelector((store) => store.contry.contryList);
  const isloading = useSelector((store) => store.contry.isLoding);
  //console.log(alldata);

  return (
    <>
      <AddPost />
      {isloading
        ? alldata
            .sort((it, bb) => it.id < bb.id)
            .map((item, i) => {
              return <div key={i}>{item.title}</div>;
            })
        : "Loding..."}
    </>
  );
};

export default Home;
