import React, { useEffect } from "react";
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../store/productSlice";
import { getAllCategories } from "../../store/categorySlice";
import ProductList from "../../components/ProductList/ProductList";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, [dispatch]);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  // randomizing the products in the list
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  const catProductsOne = products.filter(
    (product) => product.category === categories[0]
  );
  const catProductsTwo = products.filter(
    (product) => product.category === categories[1]
  );
  const catProductsThree = products.filter(
    (product) => product.category === categories[2]
  );
  const catProductsFour = products.filter(
    (product) => product.category === categories[3]
  );

  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See our products</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
                {productStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsOne} />
                )}
              </div>
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
                {productStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsTwo} />
                )}
              </div>
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[2]}</h3>
                {productStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsThree} />
                )}
              </div>
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[3]}</h3>
                {productStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={catProductsFour} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
