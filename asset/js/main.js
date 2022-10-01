$(document).ready(function(){
    //-------------------------TESTIMONIAL SLIDER
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        autoplayHoverPause: true,
       

     responsive:{
         0:{ 
             items:1
         },
         768:{
             items:1
         },
        992:{
             items:2,
         }
     }
     })

    //  --------------------------BARANCH SLIDER
    $('.branch-slider').owlCarousel ({
        loop:true,
        margin:10,
        dotsData:true,
        nav:false,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        autoplayHoverPause: true,
       
     responsive:{
         0:{ 
             items:1
         },
         768:{
             items:1
         },
        991:{
           items:2,
        //    center:true           
         }
     }
     })

    // ------------------------categories-slider 
    $('.categories-responsive').slick({
        speed: 300,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow:3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1
            }
          }
          
        ]
      });   
})
$(".modal-btn").modalVideo();
//------------------------------------FEATURED SLIDER
$('.festure-product-slider-wrapper').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//---------------------------hero-section
$('.hero-section-responsive').slick({
  dots: true,
  autoplay:true,
  infinite:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-arrow-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
  nextArrow: '<div class="slick-arrow-next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
  ]
});


console.log("Hello ALl Progammers!!!")


