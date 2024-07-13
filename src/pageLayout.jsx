// // PageLayout.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import image1 from "./assets/photo 1.jpg";
// import image2 from "./assets/photo2.jpg";
// import image3 from "./assets/photo3.jpg";
// import logo from "./assets/logo.jpeg";
// import Modal from "react-modal";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./App.css";

// Modal.setAppElement("#root");
// const PageLayout = ({ page, bodyContent }) => {
//   const products = [
//     {
//       mainImage: image1,
//       title: "Mens Casual Premium Slim Fit T-Shirts",
//       description: "High quality casual slim fit t-shirts for men.",
//       modalTitle: "Image Carousel",
//       images: [image1, image2, image3],
//       modalTexts: ["modal text1", "modal text2", "modal text3"],
//     },
//     {
//       mainImage: image2,
//       title: "Mens Casual Premium Slim Fit T-Shirts",
//       description: "High quality casual slim fit t-shirts for men.",
//       modalTitle: "Image Carousel",
//       images: [image1, image2, image3],
//       modalTexts: ["modal 2text1", "modal text2", "modal text3"],
//     },
//     {
//       mainImage: image3,
//       title: "Mens Casual Premium Slim Fit T-Shirts",
//       description: "High quality casual slim fit t-shirts for men.",
//       modalTitle: "Image Carousel",
//       images: [image1, image2, image3],
//       modalTexts: ["modal3 text1", "modal text2", "modal text3"],
//     },
//     {
//       mainImage: image1,
//       title: "Mens Casual Premium Slim Fit T-Shirts",
//       description: "High quality casual slim fit t-shirts for men.",
//       modalTitle: "Image Carousel",
//       images: [image1, image2, image3],
//       modalTexts: ["modal4 text1", "modal text2", "modal text3"],
//     },
//     {
//       mainImage: image2,
//       title: "Mens Casual Premium Slim Fit T-Shirts",
//       description: "High quality casual slim fit t-shirts for men.",
//       modalTitle: "Image Carousel",
//       images: [image1, image2, image3],
//       modalTexts: ["modal5 text1", "modal text2", "modal text3"],
//     },
//   ];
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedProduct(null);
//     document.body.style.overflow = "auto"; // Unlock scroll on body
//   };
//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalIsOpen(true);
//     document.body.style.overflow = "hidden"; // Lock scroll on body
//   };
//   const renderHeaderContent = () => {
//     switch (page) {
//       case "home":
//         return <div>Special Home Header</div>;
//       case "about":
//         return <div>About Us Header</div>;
//       case "contact":
//         return <div>Contact Us Header</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     // <div>
//     //   <header>
//     //     <h1>My App</h1>
//     //     <nav>
//     //       <Link to="/">Home</Link>
//     //       <Link to="/about">About</Link>
//     //       <Link to="/contact">Contact</Link>
//     //     </nav>
//     //     {renderHeaderContent()}
//     //   </header>
//     //   <main>{bodyContent}</main>
//     //   <footer>
//     //     <p>© 2024 My App. All rights reserved.</p>
//     //   </footer>
//     // </div>
//     <div>
//       <nav className="navbar navbar-light bg-light mb-5 ps-4 pe-4 border-bottom border-dark">
//         <a className="navbar-brand" href="#">
//           <img src={logo} width="70" height="70" alt="logo" />
//         </a>
//         <div className="d-flex gap-3">
//           <Link to="/">Home</Link>
//           <Link to="/page1">Home</Link>
//           <Link to="/page2">About</Link>
//           <Link to="/page3">Contact</Link>
//           <Link to="/page4">Contact</Link>
//         </div>
//         {/* <div className="gap-3 d-flex">
//           <a
//             href=""
//             className="btn btn-success p-2 rounded d-flex gap-2 justify-content-center align-items-center"
//           >
//             <div className="d-flex align-items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-whatsapp"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
//               </svg>
//             </div>
//             <div>Whatsapp</div>
//           </a>
//           <a
//             href=""
//             className="btn btn-primary p-2 rounded d-flex gap-2 justify-content-center align-items-center"
//           >
//             <div className="d-flex align-items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-messenger"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
//               </svg>
//             </div>
//             <div>Messenger</div>
//           </a>
//         </div> */}
//       </nav>
//       {bodyContent}
//       <footer class="bg-body-tertiary text-center mt-5 border-top border-dark border-2">
//         <div class="container p-4 pb-0">
//           <section class="mb-4">
//             <a
//               data-mdb-ripple-init
//               class="btn text-white btn-floating m-1"
//               style={{ backgroundColor: "#0082ca" }}
//               href="#!"
//               role="button"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-messenger"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
//               </svg>
//             </a>
//             <a
//               // data-mdb-ripple-init
//               class="btn text-white "
//               style={{ backgroundColor: "#333333" }}
//               href="#!"
//               role="button"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-whatsapp"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
//               </svg>
//             </a>
//           </section>
//         </div>

//         <div
//           class="text-center p-3"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//         >
//           © 2020 Copyright:
//           <a class="text-body" href="https://mdbootstrap.com/">
//             MDBootstrap.com
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PageLayout;

import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Footer from "./Footer";

function PageLayout() {
  return (
    <div>
      <NavBar />
      {/* <div style={{ position: "absolute", top: "0", zIndex: "-10" }}>
        <img src={testBg} style={{ width: "100vw" }} />
      </div> */}
      <div className="MainPageConatiner">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
export default PageLayout;
