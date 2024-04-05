import Header from "./shared/Header";
import NavBar from "./shared/NavBar";
import RightNav from "./shared/RightNav";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const news = useLoaderData();
 
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="md:my-6 my-3 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-3"></div>
        <div className="col-span-1">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
