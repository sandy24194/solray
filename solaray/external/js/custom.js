

$(document).ready(function(){
    if ( $("body").hasClass("home") ){
        $("#home").css("color","#ffb945")
    }else if ( $("body").hasClass("page-id-41") ){
        
        $("#contact").css("color","#ffb945")
    }else if ( $("body").hasClass("product_page") ){
        $("#product").css("color","#ffb945")
        alert(3)
    }else if ( $("body").hasClass("installation_page") ){
        $("#installation").css("color","#ffb945")
    }else if ( $("body").hasClass("about_page") ){
        $("#about").css("color","#ffb945")
    }
    $("#myNavbar li").click(function(){
        $(".")
    })
    $("").click(function(){
        alert(2)
        $(".paikane_pop").css({"display":"flex"});
        $(".paikane_pop").addClass("slideInTop");
        $(".paikane_pop").removeClass("slideOutTop");
    })
    $(".stop").click(function(){
        $(".paikane_pop").removeClass("slideInTop")
        $(".paikane_pop").addClass("slideOutTop");
        
    });
})