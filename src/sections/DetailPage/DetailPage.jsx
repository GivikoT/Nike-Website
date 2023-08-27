import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import { detailedProduct } from "../../constants/index";

const DetailPage = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  const { shoeTitle } = useParams();

  const filteredArray = detailedProduct.filter(
    (item) => item.name === shoeTitle
  );

  useEffect(() => {
    if (filteredArray.length > 0) {
      setSelectedImage(filteredArray[0].img1);
    }
  }, []);

  useEffect(() => {
    document.title = `Nike | ${filteredArray[0].name}`;

    return () => {
      document.title = "Nike";
    };
  }, []);

  return (
    <div>
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={selectedImage} alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a
                  href="#"
                  data-id="1"
                  onClick={() => handleImageClick(filteredArray[0].img1)}
                >
                  <img src={filteredArray[0].img1} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a
                  href="#"
                  data-id="2"
                  onClick={() => handleImageClick(filteredArray[0].img2)}
                >
                  <img src={filteredArray[0].img2} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a
                  href="#"
                  data-id="3"
                  onClick={() => handleImageClick(filteredArray[0].img3)}
                >
                  <img src={filteredArray[0].img3} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a
                  href="#"
                  data-id="4"
                  onClick={() => handleImageClick(filteredArray[0].img4)}
                >
                  <img src={filteredArray[0].img4} alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">{filteredArray[0].name}</h2>
            <a
              href={filteredArray[0].website}
              className="product-link"
              target="_blank"
            >
              visit nike store
            </a>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>{filteredArray[0].rating}</span>
            </div>

            <div className="product-price">
              <p className="last-price">
                Old Price: <span>{filteredArray[0].oldPrice}</span>
              </p>
              <p className="new-price">
                New Price: <span>{filteredArray[0].price}</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{filteredArray[0].description}</p>

              <ul>
                <li>
                  Color: <span>{filteredArray[0].color}</span>
                </li>
                <li>
                  Available: <span>In Stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" defaultValue="1" />
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Compare
              </button>
            </div>

            <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
