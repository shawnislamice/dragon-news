import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="font-poppins">
      <h2 className="text-2xl font-bold md:mb-4">All Catgories</h2>
      {categories.map((category) => (
        <Link className="font-medium py-2 block font-poppins" key={category.id}>{category.name}</Link>
      ))}
    </div>
  );
};

export default LeftNav;
