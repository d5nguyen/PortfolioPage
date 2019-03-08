// $(window).on('scroll', function(){
//     if($(window).scrollTop()){
//         $('nav').addClass('sticky');
//     } else {
//         $('nav').removeClass('sticky');
//     }
// }); 

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
}


smoothScroll('.js--projects', 1000);
