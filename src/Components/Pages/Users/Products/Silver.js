import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "../../../Assets/CSS/Dashboard.css";
const Silver = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const data = await response.json();
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const navigateToProduct = (id) => {
    navigate(`/product/${id}`);
  };
 
  return (
    <div>
      <div className="shop" />
      <h1
        style={{
          color: "#ae6d6d",
          textAlign: "center",
          fontFamily: "Georgia, serif",
          marginTop: "5%",
          borderBottom: "2px solid #ae6d6d",
          paddingBottom: "10px",
        }}
      >
        Buy Silver
      </h1>
      <div className="shops">
        <div className="shopRight">
          <label>Silver Jewelries</label>
          <div className="Featureditems">
            {filteredProducts.map((item, index) => (
              <div className="eachItems" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width:
                      index === 0
                        ? "90px"
                        : index === 1
                        ? "200px"
                        : index === 2
                        ? "120px"
                        : index === 3
                        ? "200px"
                        : "auto",
                    marginBottom:
                      index === 0
                        ? "0px"
                        : index === 1
                        ? "50px"
                        : index === 2
                        ? "10px"
                        : "auto",
                  }}
                />
                <label>Price: RS. {item.price}</label>
                <Button
                  variant="warning"
                  size="sm"
                  style={{ marginTop: '10px', marginLeft: '30%' }}
                  onClick={() => navigateToProduct(item.id)}
                >
                  Buy now
                </Button>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Silver;
