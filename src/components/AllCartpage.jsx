import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/Cartslice";

export default function AllCartpage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.Allcart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart {cart.length} items
                </MDBTypography>
              </MDBCardHeader>

              <MDBCardBody>
                {cart.map((items) => (
                  <MDBRow key={items.id}>
                    <MDBCol
                      lg="3"
                      md="12"
                      className="mb-4 mb-lg-0"
                    >
                      <MDBRipple
                        rippleTag="div"
                        rippleColor="light"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <img
                          src={items.img}
                          className="w-100"
                          alt={items.title}
                        />

                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor:
                                "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </MDBRipple>
                    </MDBCol>

                    <MDBCol
                      lg="5"
                      md="6"
                      className="mb-4 mb-lg-0"
                    >
                      <p>
                        <strong>{items.title}</strong>
                      </p>

                      <MDBCardText id="textheading">
                        Fast food is a type of mass-produced food
                        designed for commercial resale, with a strong
                        priority placed on speed of service.
                      </MDBCardText>

                      <MDBTooltip
                        wrapperProps={{ size: "sm" }}
                        wrapperClass="me-1 mb-2"
                        title="Remove item"
                      >
                        <MDBIcon
                          fas
                          icon="trash"
                          onClick={() =>
                            dispatch(removeFromCart(items.id))
                          }
                          style={{ cursor: "pointer" }}
                        />
                      </MDBTooltip>

                      <MDBTooltip
                        wrapperProps={{
                          size: "sm",
                          color: "danger",
                        }}
                        wrapperClass="me-1 mb-2"
                        title="Move to the wish list"
                      >
                        <MDBIcon fas icon="heart" />
                      </MDBTooltip>
                    </MDBCol>

                    <MDBCol
                      lg="4"
                      md="6"
                      className="mb-4 mb-lg-0"
                    >
                      <div
                        className="d-flex mb-4 align-items-center"
                        style={{ maxWidth: "300px" }}
                      >
                        <MDBBtn
                          className="px-3 me-2"
                          onClick={() =>
                            dispatch(decreaseQuantity(items.id))
                          }
                          disabled={items.quantity <= 1}
                        >
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>

                        <MDBInput
                          value={items.quantity}
                          min={1}
                          type="number"
                          label="Quantity"
                          readOnly
                        />

                        <MDBBtn
                          className="px-3 ms-2"
                          onClick={() =>
                            dispatch(increaseQuantity(items.id))
                          }
                        >
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>
                          ₹{(
                            Number(items.price) *
                            Number(items.quantity)
                          ).toFixed(2)}
                        </strong>
                      </p>
                    </MDBCol>
                  </MDBRow>
                ))}

                <hr className="my-4" />

                {cart.length === 0 && (
                  <p className="text-center">
                    Your cart is empty.
                  </p>
                )}
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>

                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />

                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />

                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />

                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal"
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>

              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                  >
                    Total quantity
                    <span>{totalQuantity}</span>
                  </MDBListGroupItem>

                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                  >
                    <div>
                      <strong>Total amount</strong>
                    </div>

                    <span>
                      <strong>
                        ₹{Number(totalPrice).toFixed(2)}
                      </strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}