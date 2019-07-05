$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a#home_page, #platform_page, #solutions_page, #who_we_help_page, #about_us_page").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  if ($(" #testimonials").length > 0) {
    $(" #testimonials").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slide:".testimonial-card",
      // adaptiveHeight: true,
      // centerMode: true,
      variableWidth: true,
      centerPadding: '160px 500px',
      dots: false,
      infinite: true,
      slidesToShow: $(window).width() <= 500 ? 1 : 3,
      slidesToScroll: 1,
      rows:1,
      arrows: true,
      cssEase: 'ease-out',

      appendArrows: $(window).width() <= 500 ? ".slick-arrows-xs" : ".slick-arrows-lg",
      prevArrow: ' <button class="btn btn-link btn-scroll-prev" id="btnPREV"><i class="fa fa-lg fa-arrow-left"aria-hidden="true"></i></button>',
      nextArrow: '<button class="btn btn-link btn-scroll-next" id="btnNEXT"><i class="fa fa-lg fa-arrow-right"aria-hidden="true"></i></button>'
    });
  }
});
