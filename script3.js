$("#uname").keydown(function(){
    let size = document.getElementById('uname').value.length;

    if (size <8 ){
       $('.msg').text("Username must be atleast 8 characters");
    }

    else{
        $('.msg').text("")
    } 
    
    if (size >10){
        $('.msg').text("Invalid Username");
    }
}),

$("#upass").keydown(function(){
    let size = document.getElementById('upass').value.length;

    if (size <8 ){
       $('.msg1').text("Password must be atleast 8 characters");
    }

    else{
        $('.msg1').text("")
    } 
    
    if (size >10){
        $('.msg1').text("Invalid Password");
    }
}),

    $("document").ready(function(){
        $(".input").focus(function(){
        $(this).addClass("bg-blue");
    }),

    $(".input").blur(function(){
        $(this).removeClass("bg-blue");
        
    })

})