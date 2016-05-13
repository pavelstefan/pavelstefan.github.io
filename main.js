var premii = ["#premiu1", "#premiu2", "#premiu3"];//id-uri premii
var index = 0;//pentru premii
var center = "0px";//center position
var leftMargin = "-266px";//left position outside 
var rightMargin = "150px";//right position outside
var swipe = false;

$(document).ready(function () {
    initPosition();
    $(".swipe").on("swiperight", function () {
        swipe = true;
        swiperight();
    })
    $(".swipe").on("swipeleft", function () {
        swipe = true;
        swipeleft();
    })
    $(".swipe").click(function(){
        if(!swipe)
            window.open("https://gustullays.ro/"); 
        swipe = false;
    });
    $("#sageata").animate({left: "-300px"}, 2000, function(){
        $(this).css("margin-left", "60px");
        $(this).addClass("sageata-anim");
    });
    $(premii[index]).addClass("premiu-anim");
});

function initPosition(){    
    $(premii[1]).css("opacity", "0");
    $(premii[2]).css("opacity", "0");
    $(premii[1]).animate({left: rightMargin}, "fast", function(){$(premii[1]).css("opacity", "1");});
    $(premii[2]).animate({left: rightMargin}, "fast", function(){$(premii[2]).css("opacity", "1");});    
}

function swiperight(){
    if(index > 0){
        $(premii[index]).removeClass("premiu-anim");
        $(premii[index]).animate({left: rightMargin});
        $(premii[index-1]).animate({left: center}, "fast", function(){
            $(this).addClass("premiu-anim");
        });
        index--;
    }
}

function swipeleft(){
    if(index < premii.length-1){
        $(premii[index]).removeClass("premiu-anim");
        $(premii[index]).animate({left: leftMargin});
        $(premii[index+1]).animate({left: center}, "fast", function(){
            $(this).addClass("premiu-anim");
        });
        index++;
    }
}