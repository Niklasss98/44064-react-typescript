import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <Carousel>
      {/* No pude linkear las imágenes que se ecuentran en la carpeta 'src/images', después probar y arreglar en lo posible */}
    <Carousel.Item>
        < img
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
            src="https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide1" />
      <Carousel.Caption>
        <h3>Primer Slide</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
    < img
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
            src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide2" />
      <Carousel.Caption>
        <h3>Segundo Slide</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
    < img
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
            src="https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slide3" />
      <Carousel.Caption>
        <h3>Tercer Slide</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselHome