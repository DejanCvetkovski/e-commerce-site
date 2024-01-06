import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import {
  HomePage,
  CategoryProductPage,
  ProductSinglePage,
  CartPage,
  SearchPage,
} from "./pages/index";
import { Provider } from "react-redux";
import store from "./store/store";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductSinglePage />} />
            <Route
              path="/category/:category"
              element={<CategoryProductPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
