import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftNav from "./shared/LeftNav";
import NavBar from "./shared/NavBar";
import RightNav from "./shared/RightNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 ">
        <div className="md:col-span-1">
          <LeftNav> </LeftNav>
        </div>
        <div className="md:col-span-2">
          <h2>Middle</h2>
        </div>
        <div className="md:col-span-1">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
