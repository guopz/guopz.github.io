/**
 * time 2017年10月10日
 * author G
 */
;(function() {
    var scrollFn = function() {};
    scrollFn.prototype = {
        constructor: scrollFn,
        yvyue: function() {
            var that = this;
            $(document).scroll('yvyue',function() {
                var scrollTop = $(document).scrollTop();
                var wH = $(window).height();
                console.log(scrollTop);
                if ( scrollTop > wH ) {
                    $('.back-layer').fadeIn(200);
                } else {
                    $('.back-layer').fadeOut(200);
                }
            });
            $('.back-layer').click(function() {
                $('body,html').animate({ scrollTop: 0 }, 200);
            });
        },
        tab:function() {
            $('.news_hook .news-span span').click(function() {
                $(this).addClass('cur').siblings().removeClass('cur');
                $('.news_hook .tab-wrapper .tab').eq($(this).index()).fadeIn(100)
                                                 .siblings().hide();
            });
        },
        swiper: function() {
            var swiper = new Swiper('.banner-swiper', {
                pagination: '.banner-span',
                paginationClickable: true,
                loop: true
            });
            var swiper = new Swiper('.teaher-swiper', {
                pagination: '.teaher-span',
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true
            });
            var swiper = new Swiper('.student-swiper', {
                pagination: '.student-span',
                slidesPerView: 4,
                slidesPerColumn: 2,
                paginationClickable: true,
                spaceBetween: 30
            });
        },
        init: function() {
            this.swiper();
            this.yvyue();
            this.tab();
        }
    }
   new scrollFn().init();
})();