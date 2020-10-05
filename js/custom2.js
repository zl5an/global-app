$(function($) {
            'use strict';
            var header = $('.header');
            header.height($(window).height());
            $(window).resize(function() {

                header.height($(window).height());
                $('.bxslider').each(function() {
                    $(this).css('paddingTop', ($(window).height() - $(".bxslider li").height()) / 2);
                });

            });



            //slider

            $('.bxslider').bxSlider({

                pager: false,
                auto: true,
                pause: 5000
            });


            $('.bxslider').each(function() {
                $(this).css('paddingTop', ($(window).height() - $(".bxslider li").height()) / 2);
            });