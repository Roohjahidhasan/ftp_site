jQuery(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });
  /*START MENU JS*/
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
  
  window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
  })
  /*END MENU JS*/
  /*START MENU JS*/
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
  
  window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
  })
  /*END MENU JS*/
  
  
  // counter start
  var counted = 0;
  $(window).scroll(function () {
  
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },
  
          {
  
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
      counted = 1;
    }
  
  });
  // counter end
  
  // carousel
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })