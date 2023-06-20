'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Sticky Menu
    $(".header__top").each(function() {
        var e = $(this);
        if (e.length > 0) {
            var t = $(document).scrollTop(),
                a = e.offset().top,
                s = e.height(),
                r = a + s + s;
            $(window).scroll(function() {
                var s = $(document).scrollTop();
                s > r ? e.addClass("is-fixed") : (s < a || s <= 0) && e.removeClass("is-fixed"), 
                s > t ? e.removeClass("show") : e.addClass("show"), t = s
            })
        }
    })

    //Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
    });

    //Search Switch
    $('.search-switch').on('click',function() {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click',function() {
        $('.search-model').fadeOut(400,function() {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_carrot-left'><span/>", "<span class='arrow_carrot-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

})(jQuery);

function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var re = /\w+@\w+\.\w+/;
    var user = {
      username : username,
      email : email,
      password : password,
    }
    
    if(username == "" || email == "" || password == "") {
      alert("Vui lòng nhập tên, email và mật khẩu.")
    }
    else if(re.test(email) == false){
      alert("Email không đúng định dạng.")
    }
    else {
      var json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Đăng ký thành công.");
    }
  }
    
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("usernamelog").value;
    var password = document.getElementById("passwordlog").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
      alert("Vui lòng nhập tên và mật khẩu.")
    }
    else if(username == data.username && password == data.password) {
      alert("Đăng nhập thành công.");
      window.location.href = "/index.html"
    }
    else {
      alert("Tên hoặc mật khẩu không chính xác.");
    }
  }