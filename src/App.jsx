// // import { useState } from "react";
// // import image1 from "./assets/photo 1.jpg";
// // import image2 from "./assets/photo2.jpg";
// // import image3 from "./assets/photo3.jpg";
// // import logo from "./assets/logo.jpeg";
// // import Modal from "react-modal";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import "./App.css";

// // Modal.setAppElement("#root");

// // function App() {
// //   const products = [
// //     {
// //       mainImage: image1,
// //       title: "Mens Casual Premium Slim Fit T-Shirts",
// //       description: "High quality casual slim fit t-shirts for men.",
// //       modalTitle: "Image Carousel",
// //       images: [image1, image2, image3],
// //       modalTexts: ["modal text1", "modal text2", "modal text3"],
// //     },
// //     {
// //       mainImage: image2,
// //       title: "Mens Casual Premium Slim Fit T-Shirts",
// //       description: "High quality casual slim fit t-shirts for men.",
// //       modalTitle: "Image Carousel",
// //       images: [image1, image2, image3],
// //       modalTexts: ["modal 2text1", "modal text2", "modal text3"],
// //     },
// //     {
// //       mainImage: image3,
// //       title: "Mens Casual Premium Slim Fit T-Shirts",
// //       description: "High quality casual slim fit t-shirts for men.",
// //       modalTitle: "Image Carousel",
// //       images: [image1, image2, image3],
// //       modalTexts: ["modal3 text1", "modal text2", "modal text3"],
// //     },
// //     {
// //       mainImage: image1,
// //       title: "Mens Casual Premium Slim Fit T-Shirts",
// //       description: "High quality casual slim fit t-shirts for men.",
// //       modalTitle: "Image Carousel",
// //       images: [image1, image2, image3],
// //       modalTexts: ["modal4 text1", "modal text2", "modal text3"],
// //     },
// //     {
// //       mainImage: image2,
// //       title: "Mens Casual Premium Slim Fit T-Shirts",
// //       description: "High quality casual slim fit t-shirts for men.",
// //       modalTitle: "Image Carousel",
// //       images: [image1, image2, image3],
// //       modalTexts: ["modal5 text1", "modal text2", "modal text3"],
// //     },
// //   ];

// //   const [modalIsOpen, setModalIsOpen] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //     setSelectedProduct(null);
// //     document.body.style.overflow = "auto"; // Unlock scroll on body
// //   };

// //   const openModal = (product) => {
// //     setSelectedProduct(product);
// //     setModalIsOpen(true);
// //     document.body.style.overflow = "hidden"; // Lock scroll on body
// //   };

// //   return (
// //     <div>
// //       <nav className="navbar navbar-light bg-light mb-5 ps-4 pe-4 border-bottom border-dark">
// //         <a className="navbar-brand" href="#">
// //           <img src={logo} width="70" height="70" alt="logo" />
// //         </a>
// //         <div className="gap-3 d-flex">
// //           <a
// //             href=""
// //             className="btn btn-success p-2 rounded d-flex gap-2 justify-content-center align-items-center"
// //           >
// //             <div className="d-flex align-items-center">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="16"
// //                 height="16"
// //                 fill="currentColor"
// //                 class="bi bi-whatsapp"
// //                 viewBox="0 0 16 16"
// //               >
// //                 <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
// //               </svg>
// //             </div>
// //             <div>Whatsapp</div>
// //           </a>
// //           <a
// //             href=""
// //             className="btn btn-primary p-2 rounded d-flex gap-2 justify-content-center align-items-center"
// //           >
// //             <div className="d-flex align-items-center">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="16"
// //                 height="16"
// //                 fill="currentColor"
// //                 class="bi bi-messenger"
// //                 viewBox="0 0 16 16"
// //               >
// //                 <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
// //               </svg>
// //             </div>
// //             <div>Messenger</div>
// //           </a>
// //         </div>
// //       </nav>
// //       <div className="container d-flex gap-5 flex-wrap justify-content-center">
// //         {products.map((product, index) => (
// //           <div
// //             key={index}
// //             className="cardContainer border border-2 p-3 border-rounded"
// //           >
// //             <div className="mb-3">
// //               <img
// //                 src={product.mainImage}
// //                 width={300}
// //                 className="rounded"
// //                 alt={product.title}
// //               />
// //             </div>
// //             <h4 className="m-3">{product.title}</h4>
// //             <p>{product.description}</p>
// //             <div className="btn btn-primary" onClick={() => openModal(product)}>
// //               Discover more
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <Modal
// //         isOpen={modalIsOpen}
// //         onRequestClose={closeModal}
// //         contentLabel="Product Modal"
// //         className="details"
// //         overlayClassName="overlay"
// //       >
// //         {selectedProduct && (
// //           <div>
// //             <div
// //               className="d-flex justify-content-between align-items-center mb-2"
// //               style={{ cursor: "pointer", fontWeight: "bold" }}
// //             >
// //               <h3>{selectedProduct.modalTitle}</h3>
// //               <div onClick={closeModal} className="d-flex align-items-center">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="16"
// //                   height="16"
// //                   fill="currentColor"
// //                   className="bi bi-x-lg"
// //                   viewBox="0 0 16 16"
// //                 >
// //                   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
// //                 </svg>
// //               </div>
// //             </div>
// //             <Carousel>
// //               {selectedProduct.images.map((image, index) => (
// //                 <div key={index}>
// //                   <img src={image} alt={`Image ${index + 1}`} />
// //                 </div>
// //               ))}
// //             </Carousel>
// //             <table className="table table-striped table-hover border border-dark">
// //               <tbody>
// //                 {selectedProduct.modalTexts.map((text, index) => (
// //                   <tr key={index}>
// //                     <td>{text}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </Modal>
// //     </div>
// //   );
// // }

// // export default App;
// // App.js or Router.js
// // import React from "react";
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import PageLayout from "./pageLayout";
// // import HomePage from "./components/homepage";
// // import Page1 from "./components/page1";
// // import Page2 from "./components/page2";
// // import Page3 from "./components/page3";
// // import Page4 from "./components/page4";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route path="/" exact>
// //           <PageLayout content={<HomePage />} />
// //         </Route>
// //         <Route path="/Page1">
// //           <PageLayout content={<Page1 />} />
// //         </Route>
// //         <Route path="/Page2">
// //           <PageLayout content={<Page2 />} />
// //         </Route>
// //         <Route path="/Page3">
// //           <PageLayout content={<Page3 />} />
// //         </Route>
// //         <Route path="/Page4">
// //           <PageLayout content={<Page4 />} />
// //         </Route>
// //       </Switch>
// //     </Router>
// //   );
// // };

// // export default App;

// // App.js or Router.js
// // App.js or Router.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PageLayout from "./pageLayout";
// import HomePage from "./components/homepage";
// import Page1 from "./components/page1";
// import Page2 from "./components/page2";
// import Page3 from "./components/page3";
// import Page4 from "./components/page4";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<PageLayout page="home" bodyContent={<HomePage />} />}
//         />
//         <Route
//           path="/page1"
//           element={<PageLayout page="about" bodyContent={<Page1 />} />}
//         />
//         <Route
//           path="/page2"
//           element={<PageLayout page="contact" bodyContent={<Page2 />} />}
//         />
//         <Route
//           path="/page3"
//           element={<PageLayout page="contact" bodyContent={<Page3 />} />}
//         />
//         <Route
//           path="/page4"
//           element={<PageLayout page="contact" bodyContent={<Page4 />} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./pageLayout";
import Page1 from "./components/page1";
import HomePage from "./components/homepage";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          element: <Page1 />,
          path: "/page",
        },
        {
          element: <Page2 />,
          path: "/page2",
        },
        {
          element: <Page3 />,
          path: "/page3",
        },
        {
          element: <Page4 />,
          path: "/page4",
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
