$(document).ready(function() {
    $(".option-button").click(function() {
        console.log(1);
        $(".color-option").fadeToggle(800);
    });
    var colorLi = $(".color-option ul li");
    colorLi
        .eq(0).css("backgroundColor", "#F79320").end()
        .eq(1).css("backgroundColor", "#79BFA1").end()
        .eq(2).css("backgroundColor", "#9F6164").end()
        .eq(3).css("backgroundColor", "#FF7182");

    colorLi.click(function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
});

function main($) {
    'use strict';


    $('.menu-bar span ').click(function() {

        $('.mobile').slideToggle(800);
    });
    //color div
    //  $('.option-button').click(function() {
    //      a = 5;
    //      b = 6;
    //      c = a + b;
    //      console.log(c);
    //      $('.color-option').show(800);
    //  });


    $(".loading-overlay .sk-folding-cube").fadeOut(2000, function() {
        $(this).parent().fadeOut(2000, function() {
            $(this).css("display", "none");
        });

    });
    $('body').css("overFlow", "auto");

}



//loading
//  $(document).ready(function() {
//      'use strict';
//      $(".loading-overlay .sk-folding-cube").fadeOut(2000, function() {
//          $(this).parent().fadeOut(2000, function() {
//              $(this).css("display", "none");
//          });

//      });
//      $('body').css("overFlow", "auto");
//