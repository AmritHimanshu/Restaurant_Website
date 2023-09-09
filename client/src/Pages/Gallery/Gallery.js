/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import GallerySection from "./components/GallerySection";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="galley-hero-banner">
        <div className="galley-hero-container">
          <h4 className="heading-4">Take a look</h4>
          <h1 className="heading-1">Our Gallery</h1>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            blanditiis perspiciatis asperiores et sapiente
          </p>
          <button className="main-btn">Explore more</button>
        </div>
      </div>
      <section className="gallery-img-container">
        <GallerySection />
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
