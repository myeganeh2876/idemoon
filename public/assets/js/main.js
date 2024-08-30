const header__humberMenu = document.querySelector('.header__humberMenu');
const responsiveMenuMobile__closeMEnu = document.querySelector('.responsiveMenuMobile__closeMEnu');
const overlyCoverBg = document.querySelector('#overlyCoverBg');
const responsiveMenuMobile = document.querySelector('#responsiveMenuMobile');
const responsiveMenuMobile__menu = document.querySelector('.responsiveMenuMobile__menu');
const responsiveMenuMobile__menu_item = document.querySelectorAll('.responsiveMenuMobile__menu > ul > li');
document.body.classList.add('overHide')
header__humberMenu.addEventListener('click', function () {
    responsiveMenuMobile.classList.add('show');
    overlyCoverBg.classList.add('show');
    document.body.classList.add('overflow')
    onOverMenu($('.menu-icon'));
    $('.recentCollection__wrsvg').removeClass('show');
    gsap.fromTo('.responsiveMenuMobile__menu > ul > li > a > span', {
        x: -180,
        opacity: 0,
        duration: .5,
        stagger: {
            each: .03,
        },
        ease: "circ.inout",
    }, {
        x: 0,
        opacity: 1,
        duration: .3,
        delay: .9,
        stagger: {
            each: .02,
        },
        ease: "circ.inout",
    }
    )
    gsap.fromTo('.responsiveMenuMobile__menu > ul > li > a > i', {
        x: -180,
        opacity: 0,
        duration: .5,
        stagger: {
            each: .03,
        },
        ease: "circ.inout",
    }, {
        x: 0,
        opacity: 1,
        duration: .3,
        delay: .9,
        stagger: {
            each: .1,
        },
        ease: "expo.inout",
    }
    )
    gsap.fromTo(responsiveMenuMobile__closeMEnu, {
        x: -180,
        opacity: 0,
        duration: .5,
        ease: "circ.inout",
    }, {
        x: 0,
        opacity: 1,
        duration: .3,
        delay: .9,
        ease: "expo.inout",
    }
    )
    setTimeout(() => {
        responsiveMenuMobile.classList.add('showOverFlow')
    }, 2000);

})

function onOverMenu(el) {
    animateLine(el.find("path").eq(0), 0);
    animateLine(el.find("path").eq(1), .1);
    animateLine(el.find("path").eq(2), .2);
}

function animateLine(t, e, i) {
    var n = 0;
    i && (n = i);

    var r = new TimelineMax({
        repeat: n,
        delay: e
    });


    r.to(t, .4, {
        x: 9,
        scaleX: 0,
        transformOrigin: "top left",
        ease: Quint.easeInOut
    }).
        set(t, {
            x: 0
        }).
        to(t, .4, {
            scaleX: 1,
            ease: Quint.easeInOut
        },
            "+=0.2");

}
responsiveMenuMobile__closeMEnu.addEventListener('click', function () {
    responsiveMenuMobile.classList.remove('show')
    overlyCoverBg.classList.remove('show')
    $('.responsiveMenuMobile__menu > ul > li').children('.menuDropDwown').removeClass('show')
    $('.responsiveMenuMobile__menu > ul > li').children('.menuDropDwown').children().removeClass('show')
    $('body').removeClass('overflow')
    responsiveMenuMobile.classList.remove('showOverFlow')

})
$('.responsiveMenuMobile__menu > ul > li > a').on('click', function (event) {
    var className = $('.responsiveMenuMobile__menu > ul > li > a').next().attr('class');
    console.log(className);
    if (className == 'menuDropDwown') {
        event.preventDefault();
    }
    // console.log($('.responsiveMenuMobile__menu > ul > li > a').next().className);

})
$('.responsiveMenuMobile__menu > ul > li').on('click', function (event) {
    $(this).siblings().children('.menuDropDwown').removeClass('show')
    $(this).siblings().children('.menuDropDwown').children().removeClass('show')
    setTimeout(() => {
        $(this).children('.menuDropDwown').toggleClass('show')
        $(this).children('.menuDropDwown').children().toggleClass('show')
    }, 400);
})


$('.overlyCoverBg').on('click', function () {
    responsiveMenuMobile.classList.remove('show')
    overlyCoverBg.classList.remove('show')
    $('.responsiveMenuMobile__menu > ul > li').children('.menuDropDwown').removeClass('show')
    $('.responsiveMenuMobile__menu > ul > li').children('.menuDropDwown').children().removeClass('show')
    $('body').removeClass('overflow')
    responsiveMenuMobile.classList.remove('showOverFlow')

})



$('.blog__Category  ul li .toggleDropmenu').slideToggle(300)
// $('.blog__Category  ul li a').removeClass('down')
$('.blog__Category  ul li .toggleDropmenu').slideUp(300)
// console.log($('.ResponsiveMenuMobile_menu nav > ul > li'));
$('.blog__Category  ul li').on('click', function () {
    $('.blog__Category ul li a').toggleClass('down')
    $(this).siblings().children('ul li a').removeClass('down')
    $(this).siblings().children('ul').slideUp()
    $(this).children('ul').slideToggle(300)
})

var tl = gsap.timeline({ onStart: isLodainStart });
tl.from("#customLoader svg.primary path", {
    attr: {
        style: `scale:${Math.floor(Math.random() * 5)} ; transform: rotate(1080deg);`
    },
    duration: 3, stagger: .1,
    //  ease: "bounce.out",
    // ease: "elastic.out(1,0.3)",
    ease: "steps(12)",
}, 1);
tl.from("#customLoader svg.position-absolute path", {


    attr: {

        style: `scale:${Math.floor(Math.random() * 5)} ; transform: rotate(1080deg);`,
    },
    duration: 3, stagger: .2,
    //  ease: "bounce.out",
    // ease: "elastic.out(1,0.3)",
    ease: "steps(12)",
    // attr: {
    //     style: `scale:${Math.floor(Math.random() * 5)} ; transform: rotate(1080deg);`,
    // }, duration: 3, stagger: .15,
    // ease: "steps(12)",
}, 1);
tl.from("#customLoader svg.Ending path", {
    opacity: 0,
    duration: .1, stagger: .05,
    ease: "elastic.out(1,0.3)",
});

function isLodainStart() {
    setTimeout(() => {
        try {
            $(document.querySelector('.customLoaderOverlay').classList.add('hide'))
        } catch (error) {

        }
    }, 1000);

}

setTimeout(() => {
    try {
        $('#customLoader span').addClass('show')
    } catch (error) {

    }
}, 7000);
setTimeout(() => {
    gsap.to('#customLoader svg.Ending path', {
        opacity: 0, duration: .3, stagger: .01, ease: "power2.out",
    })
}, 8000);
setTimeout(() => {
    try {
        $('#customLoader span').removeClass('show')
        document.body.style.setProperty('--width-customLoader', 0)
    } catch (error) {
    }
    document.body.classList.remove('overHide')
}, 9200);
setTimeout(() => {
    document.getElementById('customLoader').style.pointerEvents = 'none';
    document.getElementById('customLoader').style.opacity = '0';
}, 9500);
let allitemList = document.querySelectorAll('.aside__wrapper > *')
let allitemtabSellAndBuyMain = document.querySelectorAll('.InspirationFuture_wrContent > *')
allitemList.forEach(element => {
    element.addEventListener('click', (event) => {
        if (window.innerWidth > 992) {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
        }
        $('.wrapperPage').addClass('show');
        allitemList.forEach(element2 => {
            element2.classList[0] && element2.classList.remove('active')
        })
        console.log(event.target);
        event.target.classList.add('active')

        allitemtabSellAndBuyMain.forEach((element3) => {
            let v = element3.id.slice(8);
            console.log();
            if (v === event.target.id) {
                element3.classList.add('active')
            }
            else {
                element3.classList.remove('active')

            }
        })
    })
});