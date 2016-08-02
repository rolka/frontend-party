var mainSectionHeight = $('.t-main').height();
var tNavBar = $('.t-navbar');

$(function () {

  function stickyHeader() {
    if ($(this).scrollTop() > mainSectionHeight){
      tNavBar.css('position', 'absolute').addClass('animated slideOutDown is-menu-sticky');
    }
    else{
      tNavBar.css('position', 'fixed').removeClass('animated slideOutDown is-menu-sticky');
    }
  }

  stickyHeader();

  $('body').scrollspy({target: '.navbar', offset: -100});

  // Add smooth scrolling on all links inside the navbar
  $('#bs-example-navbar-collapse-1 a, .t-main-scroll-button, .action-check-pricing, .navbar-brand, .pricing-action a, .footer-explore a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }  // End if
  });

  var navbarToggle = $('.navbar-toggle');
  navbarToggle.on('click', function () {
    $(this).toggleClass('active');
  });

  $('.navbar-collapse a').on('click', function () {
    navbarToggle.toggleClass('active');
  });
});

//

$(window).scroll(function() {
  var navbar = $('.t-navbar');
  if ($(this).scrollTop() > mainSectionHeight){
    navbar.addClass('animated slideInDown is-menu-sticky').css('position', 'fixed');
  }
  else{
    navbar.removeClass('animated slideOutDown is-menu-sticky').css('position', 'absolute');
  }
});