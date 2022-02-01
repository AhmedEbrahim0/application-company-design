$(function(){
//     aaaaaaaaaaaaaaaaaaaaa


$(".btn-fixed").hide();

      $(window).scroll(function(){

        let x=$(window).scrollTop();
        if(x>600){
      $(".btn-fixed").show();
        }
        else{
      $(".btn-fixed").hide();
        }

      })


$(".btn-fixed").click(function(){
  $("html,body").animate({
    scrollTop:0
  })
})


          var app = document.getElementById('x');

          var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
          });

          typewriter
            .pauseFor(100)
            .typeString('Welcome to Magic Agency...')
            .pauseFor(10000)
            .deleteAll()
            .pauseFor(1000)
            .start();



  $(".navbar ul li a").click(function(){
    let x=$(this).attr("data-scroll");
    $("body,html").animate({
      scrollTop:$(`#${x}`).offset().top-100
    })
   })



   AOS.init({
    duration:2000
   });



   $(".btn-out").click(function(){
    $(".login-modal").hide();
  })

$(".btn-login-modal").click(function(){
  $(".login-modal").show();
  
})




$(".btn-out-pay").click(function(){
    $(".form-pay").css({
    display:"none"
   })
  })
 
  $(".btn-open-pay").click(function(){
   $(".form-pay").css({
    display:"block"
   })
 })



//     aaaaaaaaaaaaaaaaaaaaa

})