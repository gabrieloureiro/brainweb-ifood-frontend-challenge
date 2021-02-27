const settings = {
  autoplay: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    }
  ]
}

export default settings
