// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "../assets/photo 1.jpg";
import image2 from "../assets/photo2.jpg";
import image3 from "../assets/photo3.jpg";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import "./homepage.css";
const HomePage = () => {
  const products = [
    {
      mainImage: image1,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description: "High quality casual slim fit t-shirts for men.",
      modalTitle: "Image Carousel",
      images: [image1, image2, image3],
      modalTexts: ["modal text1", "modal text2", "modal text3"],
    },
    {
      mainImage: image2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description: "High quality casual slim fit t-shirts for men.",
      modalTitle: "Image Carousel",
      images: [image1, image2, image3],
      modalTexts: ["modal 2text1", "modal text2", "modal text3"],
    },
    {
      mainImage: image3,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description: "High quality casual slim fit t-shirts for men.",
      modalTitle: "Image Carousel",
      images: [image1, image2, image3],
      modalTexts: ["modal3 text1", "modal text2", "modal text3"],
    },
    {
      mainImage: image1,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description: "High quality casual slim fit t-shirts for men.",
      modalTitle: "Image Carousel",
      images: [image1, image2, image3],
      modalTexts: ["modal4 text1", "modal text2", "modal text3"],
    },
    {
      mainImage: image2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description: "High quality casual slim fit t-shirts for men.",
      modalTitle: "Image Carousel",
      images: [image1, image2, image3],
      modalTexts: ["modal5 text1", "modal text2", "modal text3"],
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "auto"; // Unlock scroll on body
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden"; // Lock scroll on body
  };
  return (
    <>
      <div>
        <h2>Title For Paragraph</h2>
        <p style={{ fontSize: "22px" }} className="text-start ps-5 pe-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure fugit
          maxime neque nobis repellendus mollitia, eligendi minus voluptates.
          Quasi, facilis velit distinctio excepturi mollitia eius expedita
          beatae sunt repellendus!
        </p>
      </div>
      <div className="container d-flex gap-5 flex-wrap justify-content-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="cardContainer border border-2 p-3 border-rounded"
          >
            <div className="mb-3">
              <img
                src={product.mainImage}
                width={300}
                className="rounded"
                alt={product.title}
              />
            </div>
            <h4 className="m-3">{product.title}</h4>
            <p>{product.description}</p>
            <div className="btn btn-primary" onClick={() => openModal(product)}>
              Discover more
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Modal"
        className="details"
        overlayClassName="overlay"
      >
        {selectedProduct && (
          <div>
            <div
              className="d-flex justify-content-between align-items-center mb-2"
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              <h3>{selectedProduct.modalTitle}</h3>
              <div onClick={closeModal} className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
            </div>
            <Carousel>
              {selectedProduct.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <table className="table table-striped table-hover border border-dark">
              <tbody>
                {selectedProduct.modalTexts.map((text, index) => (
                  <tr key={index}>
                    <td>{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Modal>
    </>
  );
};

export default HomePage;
