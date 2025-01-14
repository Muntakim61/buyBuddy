import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

{/*import data from product.json */}
import data from "../products.json"
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults="Showing 01-12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [Products, setProducts] = useState(data);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage=12;

  const indexofLastProduct=currentPage * productsPerPage;
  const indexofFirstProduct= indexofLastProduct-productsPerPage;
  const currentProducts=Products.slice(indexofFirstProduct,indexofLastProduct);

  //function to change the current page
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber);
  };

  //filter product based on category
  const [selectCatagory, setSelectCatagory] = useState("All");
  const menuItems=[...new Set(data.map((Val)=>Val.category))];

  const filterItem=(curcat)=>{
    const newItem=data.filter((newVal)=>{
      return newVal.category===curcat;
    })
    setSelectCatagory(curcat);
    setProducts(newItem);
  }
  return (
    <div>
        <PageHeader title="Our shop's page" curPage="Shop"/>
        {/*shop page */}
        <div className="shop-page padding-tb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <article>
                  {/*layout and title here */}
                  <div className="shop-title d-flex flex-wrap justify-content-between">
                    <p>{showResults}</p>
                    <div className={`product-view-mode ${GridList ?"gridActive" : "listActive"}`}>
                      <a className="grid" onClick={()=>setGridList(!GridList)}>
                        <i className="icofont-ghost"></i>
                      </a>
                      <a className="list" onClick={()=>setGridList(!GridList)}>
                        <i className="icofont-listine-dots"></i>
                      </a>
                    </div>
                  </div>
                  
                  {/*product card */}
                  <div>
                    <ProductCards GridList={GridList} Products={currentProducts} />
                  </div>
                  <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={Products.length}
                  paginate={paginate}
                  activePage={currentPage}
                  />


                </article>
              </div>

              {/*right */}
              <div className="col-lg-4 col-12">
                <aside>
                  <Search Products={Products} GridList={GridList}/>
                  <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectCatagory={selectCatagory}
                  />
                  <PopularPost/>
                  <Tags/>
                 </aside>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop