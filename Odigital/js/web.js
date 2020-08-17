jQuery(document).ready(function(){
    
    "use strict"
        $('.slider').ripples({
            dropRadius: 13,
            perturbance: 0.01,
            
        });
        

    var typed = new Typed('.text', {
        strings: ['I love<strong class="primary"> ODIGITAL </strong>'
            , 'Learn With <strong class="primary">US!!</strong>'],
        typeSpeed:10,
        loop:true,
    });
    

    $(window).scroll(function(){

        var top = $(window).scrollTop();
        if(top>=60){
            $("nav").addClass('secondary');
        }

        else
            if ($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
       
        }

    });
    
$('.work').magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
        enabled: true,
       }

    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 8,
        nav: false,
        autoWidth: true,
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
    });

   
    var btn = $('#toTop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

  

  
  
  
  

  
  

  

  
  
  
  
  
  
  
  });

    
