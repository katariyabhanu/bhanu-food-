import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/Cartslice';
import { useLocation } from 'react-router-dom';

const AllProduct = () => {
  const data = useSelector((state) => state.Allcart.items);
  const location = useLocation();
  const dispatch = useDispatch();
  const [clickedItems, setClickedItems] = useState({});

  const searchText =
    new URLSearchParams(location.search).get('search')?.toLowerCase().trim() || '';

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          {filteredData.map((item, key) => (
            <MDBCol size="md-4 mt-4" key={item.id ?? key}>
              <MDBCard id="card">
                <MDBCardImage src={item.img} position="top" id="hello" alt={item.title} />

                <MDBCardBody>
                  <MDBCardTitle id="titleheading">{item.title}</MDBCardTitle>
                  <MDBCardTitle id="priceheading">$ {item.price}</MDBCardTitle>

                  <MDBCardText id="textheading">
                    Fast food is a type of mass-produced food designed for
                    commercial resale, with a strong priority placed on speed
                    of service. Fast food is a commercial term
                  </MDBCardText>

                  <MDBBtn
                    id="button"
                    className={clickedItems[key] ? 'buy-now-clicked' : ''}
                    onClick={() => {
                      dispatch(addToCart(item));
                      setClickedItems((previous) => ({
                        ...previous,
                        [key]: true
                      }));
                    }}
                  >
                    Buy Now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AllProduct;
