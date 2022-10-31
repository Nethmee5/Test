import Carousel from 'react-bootstrap/Carousel';
import Data from './utills/Data';

function UncontrolledExample() {
  return (
    <Carousel> { Data.map((item, idx) => {

        return (
      <Carousel.Item key={item.id}>
        <img
          className="d-block w-100"
          src={item.img}
          alt="First slide"
        />
       
      </Carousel.Item>
        );
    })}
    </Carousel> 

  );
}

export default UncontrolledExample;