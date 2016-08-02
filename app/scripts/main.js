/**
 * sticky menu
 */

$(window).on('load scroll',function(){
  var mainSectionHeight = $('.t-main').height(),
      tNavBar = $('.t-navbar');
  if ($(this).scrollTop() > mainSectionHeight){
    tNavBar.addClass(' is-menu-sticky');
  }
  else{
    tNavBar.removeClass('is-menu-sticky');
  }
});

$(function () {

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

/**
 * horizontally align 'Try now' buttons in Pricing section
 */

$(window).on('load resize',function(){
  var pricingDesc = $('.pricing-desc'),
      selectorAnnually = $('.annually'),
      monthlyHeight = $('.monthly').find(pricingDesc).height(),
      annuallyHeight = selectorAnnually.find(pricingDesc).height(),
      annually = selectorAnnually.find(pricingDesc),
      windowSize = $(this).width();
  if ( windowSize < 350 ){
    if ( annuallyHeight >  monthlyHeight){
      annually.addClass('remove-margin');
    }
  }
  else
    annually.removeClass('remove-margin');
});
