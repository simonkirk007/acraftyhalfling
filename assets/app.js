jQuery(document).ready(function(){
    // jQuery('.related-products ul.grid.product-grid').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: ture
    //   });
    jQuery('.prod-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      responsive:[
      {
          breakpoint:900,
          settings:
          {
              slidesToShow:2,
              slidesToScroll:1
          }
      },
      {
          breakpoint:500,
          settings:
          {
              slidesToShow:1,
              slidesToScroll:1
          }
      }
      ]
      });
  });



