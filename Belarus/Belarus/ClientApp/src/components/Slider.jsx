import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel >
       <Carousel.Item>
        <img className="d-block w-100"  src="../assets/images/slider1.jpg" />   
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../assets/images/slider1.jpg" />   
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../assets/images/slider1.jpg" />   
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;