import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOn } from "../../store/sidebarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const term = useSelector(getSidebarStatus);
  console.log(term);

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            type="button"
            className="sidebar-show-btn text-white"
            onClick={() => dispatch(setSidebarOn())}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-brand-txt mx-2">
              <span className="fw-7">Snap</span>Up.
            </span>
          </Link>
        </div>
        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14"
                placeholder="Search your preferred items here"
              />
              <Link className="text-white search-btn flex align-center justify-center">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">0</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
