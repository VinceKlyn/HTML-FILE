$(document).ready(function(){
    $("h1").click(function(){
        $("p").toggle();
    }),

    $("#btn1").hover(function(){
        $("#box1").slideToggle("slow");
    }),
/*
    $("#input1").mouseleave(function(){
        alert("Mouse Leave");
    })
*/
    $("#btn2").click(function(){
        $("#box2").fadeToggle("fast")
    }),

    $("a").hover(function(){
        $("#link1").toggleClass("bg-blue");
        $("#link2").toggleClass("bg-brown");
        $("#link3").toggleClass("bg-blue");
        $("#link4").toggleClass("bg-brown");
    }),

    $(".input1").focus(function(){
        $(this).addClass("bg-blue");
    }),

    $(".input1").blur(function(){
        $(this).removeClass("bg-blue");
    })
})