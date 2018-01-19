$("#seeLoc").on("click",function(){
    $("#location").css("display","block");
        $('html, body').animate({
        scrollTop: $("#location").offset().top
    }, 1000);
});