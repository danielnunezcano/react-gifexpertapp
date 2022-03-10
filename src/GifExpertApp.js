import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  //   const handleAdd = (e) => {
  //     setCategories([...categories, "One Piece"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <h2>
        <AddCategory setCategories={setCategories} />
      </h2>
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
