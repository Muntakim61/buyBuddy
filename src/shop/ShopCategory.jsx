import React from 'react';
import data from "../products.json"

const ShopCategory = ({filterItem,setItem,menuItems,setProducts,selectCatagory}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
      <button onClick={()=>setProducts(data)} className={`m-2 ${selectCatagory === "All" ? "bg-warning" : ""}`}>All</button>
        {
        menuItems.map((Val, id) => (
          <button
            className={`m-2 ${selectCatagory === Val ? "bg-warning" : ""}`}
            key={id}
            onClick={() => filterItem(Val)}
          >
            {Val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
