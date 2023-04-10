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
        breakpoint:800,
        settings:
        {slidesToShow:1,
            slidesToScroll:1,
            infinite:!0,dots:!0
        }
        },
        {
            breakpoint:600,
            settings:
            {
                slidesToShow:1,
                slidesToScroll:1
            }
        }]
      });
  });



