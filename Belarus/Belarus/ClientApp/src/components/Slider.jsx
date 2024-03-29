import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Carousel>
       <Carousel.Item>
        <img className="d-block w-100"  alt='#' src="../assets/images/slider2.jpg" />   
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt='#' src="../assets/images/slider1.jpg" />   
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt='#' src="../assets/images/slider3.jpg" />   
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;