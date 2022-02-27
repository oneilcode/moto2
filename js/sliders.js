$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      responsive: [{
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               dots: false,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,

            }
         },
      ]
   });
});