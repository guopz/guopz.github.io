let Home = {
    init() {
        this.scroll();
        this.topNav();
        this.swiper();
    },
    swiper() {
        let mySwiper = new Swiper('.JQ_swiper', {
            loop: true,
            autoplay: 5000,
            pagination: '.m-swiper-pagination',
            paginationClickable: true,
        })    
    },
    topNav() {
        let item = $(".JQ_hover_item a");
        item.click(function() {
            $('.JQ_value').html($(this).html());
            $(this).addClass('u-active').siblings().removeClass('u-active');
        });
    },  
    scroll() {
        let num = 0;
        let speed = 40;
        function goLeft() {
            if (num == -900) {
                num = 0;
            }
            num -= 1;
            $(".JQ_scroll").css({
                left: num
            })
        }
        let timer = setInterval(goLeft, speed);
        $(".m-scroll-jq").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(goLeft, speed);
        })
    }
}