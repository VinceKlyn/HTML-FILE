$(document).ready(function(){
    $("#js-box1").delay(100).fadeIn("slow");
    $("#js-box2").delay(200).fadeIn("slow");
    $("#js-box3").delay(400).fadeIn("slow");
    $("#js-box4").delay(600).fadeIn("slow");

    $("#js-box5").delay(800).fadeIn("slow");
    $("#js-box6").delay(1000).fadeIn("slow");
    $("#js-box7").delay(1200).fadeIn("slow");
    $("#js-box8").delay(1400).fadeIn("slow");

    $(".box").hover(function(){
        $(this).animate({
            opacity:1,
            left:"+=50",
            height:"toggle"
        }, 5000, function(){

         
        })
    
    }),

    $(".box").mouseleave(function(){
        $(this).removeClass("transform");

    })

})

