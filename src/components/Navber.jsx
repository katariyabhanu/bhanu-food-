import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/Cartslice';

export default function Navber() {
  const { cart, totalQuantity } = useSelector((state) => state.Allcart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/allproduct?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <div id="navbar">
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand id="domino" className="brand">
            <img src="/mylogo.png" alt="BCA Tadka Town logo" />
            <span>BCA Tadka Town</span>
          </MDBNavbarBrand>

          <Link to="/allproduct" className="navheading our-menu">
            Our Menu
          </Link>

          <form onSubmit={handleSearch} className="navbar-search">
            <input
              type="search"
              placeholder="Search pizza, burger..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search menu"
            />
            <button type="submit" aria-label="Search">
              <MDBIcon fas icon="search" />
            </button>
          </form>

          <Link to="/cartpage" className="navheading">
            <MDBIcon className="cart" fas icon="shopping-cart" />
            <sup id="supertag">{totalQuantity}</sup>
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
