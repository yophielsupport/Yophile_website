import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-prev slick-arrow"
    onClick={onClick}
    style={{
      left: '25px',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '50%',
      border: 'none',
      width: '40px',
      height: '40px',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    &#10094;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-next slick-arrow"
    onClick={onClick}
    style={{
      right: '25px',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '50%',
      border: 'none',
      width: '40px',
      height: '40px',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    &#10095;
  </button>
);

const Hero18 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };

  const slides = [
    { id: 1, image: '/img/photos/Slider1.jpg' },
    { id: 2, image: '/img/photos/Slider2.jpg' },
    { id: 3, image: '/img/photos/Slider3.jpg' },
    { id: 4, image: '/img/photos/Slider4.jpg' },
    { id: 5, image: '/img/photos/Slider5.jpg' },
  ];

  return (
    <section
      style={{
        width: '100%',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              outline: 'none',
              position: 'relative',
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 'calc(100vh - 70px)',
                objectFit: 'contain',
                objectPosition: 'center top',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slider-image {
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .slick-center .slider-image {
          opacity: 1;
          transform: scale(1);
        }

        .slick-dots {
          bottom: 30px !important;
        }

        .slick-dots li button:before {
          color: #fff !important;
          font-size: 12px !important;
        }

        @media (max-width: 768px) {
          .slider-image {
            max-height: 55vh !important;
            transform: scale(1) !important;
            opacity: 1 !important;
          }

          .slick-dots {
            bottom: 15px !important;
          }
        }

        @media (max-width: 480px) {
          .slider-image {
            max-height: 45vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero18;