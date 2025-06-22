import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel1.css';

const MyCarousel = () => {
  const images = [
    {
      url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/12/full/1689175810-294.jpg?im=FitAndFill=(826,465)',
      text: 'This is the caption for the first slide.'
    },
    {
      url: 'https://www.nps.org.au/assets/_750x468_crop_center-center_75_none/GettyImages-862433964.jpg',
      text: 'This is the caption for the second slide.'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSx9CttX1hi2EIUTlfcNGz7fmmFPFvfLxkYB3-PemahKc5QJ8bOd3pzGv2jnMWba4oOfA&usqp=CAU',
      text: 'This is the caption for the third slide.'
    }
  ];

  return (
    <div className="carousel-container">
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Slide ${index + 1}`} className="image-height" />
            <p className="legend">{image.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
