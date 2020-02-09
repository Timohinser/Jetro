$(function () {

   $('.header__menu a').click(function () {
      $('.header__menu a').removeClass('header__menu-link_active');
      $(this).addClass('header__menu-link_active');
   });

   $('.header__menu-btn').on('click', function () {
      $('.header__menu > ul').slideToggle();
   });

   $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: true,
      asNavFor: '.slider-nav',
   });

   $('.slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 961,
            settings: {
               slidesToShow: 5,
               variableWidth: false,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 4,
               variableWidth: false,
            }
         },
         // {
         //    breakpoint: 600,
         //    settings: {
         //    slidesToShow: 3,   
         //    variableWidth: false,                        
         //    }
         // },
         // {
         //    breakpoint: 460,
         //    settings: {
         //    slidesToShow: 2,   
         //    variableWidth: false,                        
         //    }
         // },
      ]
   });
});
