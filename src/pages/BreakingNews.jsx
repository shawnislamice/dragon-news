import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
      <div className="flex items-center gap-4">
        <button className="btn btn-secondary">Latest</button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link to='/'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            corrupti officiis minima numquam praesentium id, rem voluptates,
            placeat perspiciatis commodi maiores eligendi harum error ab laborum
            ullam dicta velit laudantium!
          </Link>
        </Marquee>
      </div>
    );
};

export default BreakingNews;