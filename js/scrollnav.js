$(document).ready(function() {
  function fixLayout()
  {
          //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      if($(window).innerWidth()<800)
      {
           $('#nav_bar').addClass('navbar-mobile');
 
      }else
      {
          $(window).scrollTop()
          if ($(window).scrollTop() > $(window).innerHeight()) {
            $('#nav_bar').addClass('navbar-fixed');
          }
          if ($(window).scrollTop() < ($(window).innerHeight()+1)) {
            $('#nav_bar').removeClass('navbar-fixed');
          }

      }

  }
  fixLayout();
  $(window).scroll(function () {
    fixLayout();

  });
});