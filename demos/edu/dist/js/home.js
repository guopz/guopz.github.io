!function(){var e=function(){};e.prototype={constructor:e,yvyue:function(){$(document).scroll("yvyue",function(){var e=$(document).scrollTop(),n=$(window).height();console.log(e),e>n?$(".back-layer").fadeIn(200):$(".back-layer").fadeOut(200)}),$(".back-layer").click(function(){$("body,html").animate({scrollTop:0},200)})},tab:function(){$(".news_hook .news-span span").click(function(){$(this).addClass("cur").siblings().removeClass("cur"),$(".news_hook .tab-wrapper .tab").eq($(this).index()).fadeIn(100).siblings().hide()})},swiper:function(){new Swiper(".banner-swiper",{pagination:".banner-span",paginationClickable:!0,loop:!0}),new Swiper(".teaher-swiper",{pagination:".teaher-span",slidesPerView:4,paginationClickable:!0,spaceBetween:10,freeMode:!0}),new Swiper(".student-swiper",{pagination:".student-span",slidesPerView:4,slidesPerColumn:2,paginationClickable:!0,spaceBetween:30})},init:function(){this.swiper(),this.yvyue(),this.tab()}},(new e).init()}();