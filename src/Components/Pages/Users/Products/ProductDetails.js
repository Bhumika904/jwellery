import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="4">
            <MDBCard className="text-black">
              <MDBIcon className="px-3 pt-3 pb-2" />
              <MDBCardImage style={{marginLeft:'30%'  }}
                src={product.image}
                alt={product.title}
                width='150px'
              />
              <MDBCardBody>
                <div className="text-center">
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <p className="text-muted mb-4">{product.category}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span style={{ color:'orange'}}>Price</span>
                    <span style={{ color:'orange'}}>Rs.{product.price}</span>
                  </div>
                </div>
                <div className="text-center">
                <p className="text-muted mb-3">{product.description}</p>
                </div>
                <Button
                  variant="warning"
                  size="lg"
                  style={{ marginTop: '10px', marginLeft: '35%' }}
                >
                  Add to Cart
                </Button>{" "}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
