import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React, { useEffect, useState } from "react";
  
  export default function Cart() {
    const [cartData, setCartData] = useState(null);
  
    useEffect(() => {
        const fetchCart = async () => {
          try {
            const response = await fetch(`https://fakestoreapi.com/carts/user/2`);
            const data = await response.json();
            setCartData(data);
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchCart();
      }, []);
  
    if (!cartData) {
      return <div>Loading...</div>;
    }
  
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {cartData.products ? cartData.products.length : 0} items
                          </MDBTypography>
                        </div>
  
                        <hr className="my-4" />
  
                        {cartData.map((product) => (
                          <MDBRow
                            key={product.id}
                            className="mb-4 d-flex justify-content-between align-items-center"
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={product.image}
                                fluid
                                className="rounded-3"
                                alt={product.title}
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {product.category}
                              </MDBTypography>
                              <MDBTypography tag="h6" className="text-black mb-0">
                                {product.title}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                              <MDBBtn color="link" className="px-2">
                                <MDBIcon fas icon="minus" />
                              </MDBBtn>
  
                              <MDBInput type="number" min="0" defaultValue={product.quantity} size="sm" />
  
                              <MDBBtn color="link" className="px-2">
                                <MDBIcon fas icon="plus" />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                € {product.price}
                              </MDBTypography>
                            </MDBCol>
                          </MDBRow>
                        ))}
  
                        <hr className="my-4" />
  
                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText tag="a" href="/" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back to shop
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                          Summary
                        </MDBTypography>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Items {cartData.products ? cartData.products.length : 0}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            € {cartData.products ? cartData.products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2) : 0}
                          </MDBTypography>
                        </div>
                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Shipping
                        </MDBTypography>
                        <div className="mb-4 pb-2">
                          <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>
                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Give code
                        </MDBTypography>
                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            € {cartData.products ? cartData.products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2) : 0}
                          </MDBTypography>
                        </div>
                        <MDBBtn color="dark" block size="lg">
                          Register
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
  