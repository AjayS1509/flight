import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from './../../components/Images/img1.jpg';
import Img2 from './../../components/Images/img2.jpg';
import Img3 from './../../components/Images/img3.jpg';
import styles from "./home.module.css";

const ImageSlider = () => {
  return (
    <>
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        interval={3000}
      >
        <div className={styles.alignCe}>
          <Image src={Img1} alt="Image 1" height={700} />

        </div>
        <div className={styles.alignCe}>
          <Image src={Img2} alt="Image 2" height={700}/>

        </div>
        <div className={styles.alignCe}>
          <Image src={Img3} alt="Image 3" height={700}/>

        </div>
      </Carousel>
    </div>
    </>
  );
};

export default ImageSlider;
