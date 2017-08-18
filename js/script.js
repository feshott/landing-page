$(function () {

  $('.menu-btn').click(function(){
    $('.menu-trigle').slideToggle("slow", function() {

    });

  });
});



// ------------------------------Scroll Revial

window.sr = ScrollReveal({ reset: false,
                          
                          distance: '200px',

                         });

// Customizing a reveal set
sr.reveal('.services-header,.skill-header,.work-header,.contact-header,.feedback-header,.contact-form', { duration: 900 }
         
         );



