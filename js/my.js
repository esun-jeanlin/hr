$(document).ready(function () {
    //插件初始化

    //AOS
    $(function () {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
    })

    //simple pagination
    var items = $(".list-wrapper .list-item");
    var numItems = items.length;
    var perPage = 10;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "上一頁",
        nextText: "下一頁",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
    
    //漢堡選單
    $('.nav-hamburger').click(function () {
        $('.nav-menu').toggleClass('active');
        $('.nav-hamburger').toggleClass('active');
    })

    //Tab
    $(function () {
        $(".about .btn").eq(0).addClass('active');
        $(".about-content li").eq(0).show().siblings().hide();
        $(".about .btn").on('click', function () {
            var $tabIndex = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(".about-content li").eq($tabIndex).addClass('active').siblings().removeClass('active');
            $(".about-content li").eq($tabIndex).show().siblings().hide();
        });
    });

    //goTop
    $('.goTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').stop().fadeOut();
        }

    });

    //常見問題
    $('.qa-list .qa .qa-content').slideUp();
    $('.qa-list .qa').click(function () {
        var $index = $(this).index();
        $('.qa-list .qa .qa-content').eq($index).slideToggle();
        $(this).addClass('active')
        if ($('.qa-list .qa .plus').eq($index).html() == " + ") {
            $('.qa-list .qa .plus').eq($index).html(" - ")
        } else(
            $('.qa-list .qa .plus').eq($index).html(" + ")
        )
    })


})