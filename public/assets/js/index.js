try {
    const textEm = document.querySelector('.aside__title');
    const text = textEm.innerText.split(' ');
    textEm.innerHTML = '';
    text.forEach(element => {
        const temp = document.createElement('span')
        const tempWr = document.createElement('span')
        temp.className = 'animations';
        tempWr.className = 'animationsWr';
        temp.innerHTML = ' ' + element
        temp.innerHTML = ' ' + element
        tempWr.insertAdjacentElement('beforeend', temp);
        textEm.insertAdjacentElement('beforeend', tempWr);
    });
} catch (error) {

}

addEventListener("load", (event) => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
    try {
        gsap.from('.animationsWr .animations', {
            y: 80,
            rotation: 10,
            skewY: 10,
            opacity: 0,
            duration: .4,
            stagger: {
                each: .12,
            },
            ease: "circ.inout",
        })
        if (windowWidth >= 992) {
            document.body.style.setProperty("--dw", document.body.clientWidth + "px");
            document.body.style.setProperty("--dh", document.body.clientHeight + "px");
            document.getElementById("wrCard").onmousemove = e => {
                for (const card of document.getElementsByClassName("cardStori")) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);

                    const BOX = card.getBoundingClientRect();
                    const POINT = { x: x, y: y };
                    const RATIO = { x: POINT.x / BOX.width, y: POINT.y / BOX.height };
                    const CENTER = fromCenter(RATIO);
                    // set some css variables referenced in css
                    card.style.setProperty("--ratio-x", RATIO.x);
                    card.style.setProperty("--ratio-y", RATIO.y);
                }

            };
            document.getElementById("wrCardss").onmousemove = e => {
                for (const card of document.getElementsByClassName("cardStori")) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);

                    const BOX = card.getBoundingClientRect();
                    const POINT = { x: x, y: y };
                    const RATIO = { x: POINT.x / BOX.width, y: POINT.y / BOX.height };
                    const CENTER = fromCenter(RATIO);
                    // set some css variables referenced in css
                    card.style.setProperty("--ratio-x", RATIO.x);
                    card.style.setProperty("--ratio-y", RATIO.y);
                }

            };
        }
    } catch (error) {

    }
});
if (window.innerWidth > 992) {
    try {
        document.querySelector('.InspirationFuture_wrContent > div').classList.add('active')
        $('.wrapperPage').addClass('show');
    } catch (error) {

    }

}

//init Tilt.js
VanillaTilt.init();




//*? <======================================= Btn Header  ===========================>

$(document).ready(function () {
    $('.btn-posnawr').on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX })
    })
    $('.btn-posnawr').on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX })
    });
});




//*? <======================================= END  Btn Header  ===========================>







//*? <======================================= Settings Story ===========================>
let BtnCloseModalStory = document.querySelector('.modal-CuZa .btn-colseCu')
let oneSlideStory = document.querySelector('.modalStroy__swiper .swiper-slide')
let allElSliderStory = document.querySelectorAll('.storySlider__swiper .swiper-slide');
let allElSliderSectionTeaser = document.querySelectorAll('.sectionTeaser__swiper .swiper-slide');

const storySlider__swiper = new Swiper('.storySlider__swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    touchEventsTarget: 'container',
    lazy: true,
    speed: 500,
    freeMode: {
        enabled: true,
        // sticky: true,
        // momentumBounce: false,

    },
    navigation: {
        nextEl: ".storySlider-next",
        prevEl: ".storySlider-prev",
    },
    breakpoints: {
        400: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 12,
            freeMode: {
                enabled: true,
                sticky: true,
                momentumBounce: false,
                momentum: false,
                minimumVelocity: 0.01
            },
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
    }
});
const modalStroy__swiper = new Swiper('.modalStroy__swiper', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    speed: 500,
    lazy: true,

    breakpoints: {
        400: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 14,
        },
        1400: {
            slidesPerView: 4.1,
            spaceBetween: 15,
        },
        1600: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    }
});

$('.storySlider__swiper .swiper-slide').on('click', function (e) {
    // get attribute
    let attrBiut = $(this).attr('aria-label');
    slideToSlider(modalStroy__swiper, Number(attrBiut[0] - 1), 500)
    // fixed position btnClose 
    // setTimeout(() => {
    //     let widthSlide = oneSlideStory.offsetWidth - 100;
    //     BtnCloseModalStory.style.marginRight = widthSlide + 'px';
    // }, 500);

});

// go to slide click
function slideToSlider(nameSlider, numberindex, speed) {
    nameSlider.slideTo(numberindex, speed)
}


//fixed bug click story touch and moving
storySlider__swiper.on('sliderFirstMove', function () {
    allElSliderStory.forEach(element => {
        element.style.pointerEvents = 'none';
    });
});
storySlider__swiper.on('transitionEnd', function () {
    allElSliderStory.forEach(element => {
        element.style.pointerEvents = 'auto';
    });
});
//   fixed position btnClose
modalStroy__swiper.on('beforeResize', function () {
    let widthSlide = oneSlideStory.offsetWidth - 100;
    BtnCloseModalStory.style.marginRight = widthSlide + 'px';
});
//*? <======================================= END Settings Story ===========================>





//*? <======================================= Settings sectionTeaser ===========================>
const sectionTeaser__swiper = new Swiper('.sectionTeaser__swiper', {
    slidesPerView: 1.1,
    spaceBetween: 12,
    touchEventsTarget: 'container',
    lazy: true,
    navigation: {
        nextEl: ".sectionTeaser-prev",
        prevEl: ".sectionTeaser-next",
    },
    breakpoints: {
        400: {
            slidesPerView: 1.2,
            spaceBetween: 12,
        },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
});
sectionTeaser__swiper.on('sliderFirstMove', function () {
    allElSliderSectionTeaser.forEach(element => {
        element.style.pointerEvents = 'none';
    });
});
sectionTeaser__swiper.on('transitionEnd', function () {
    allElSliderSectionTeaser.forEach(element => {
        element.style.pointerEvents = 'auto';
    });
});
const cards = document.querySelectorAll(".wrapper-newCard .cardvid");
cards.forEach(card => {
    card.addEventListener("mousemove", handleMouseMove);
});
function handleMouseMove(e) {
    const rect = this.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    this.style.setProperty("--start", angle + 60);
}
//*? <======================================= END  Settings sectionTeaser ===========================>




const modalGallery__swiper = new Swiper('.modalGallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
    speed: 500,
    breakpoints: {
        992: {
            slidesPerView: 1.5,
            spaceBetween: 24,
        },

    }
});

const modalvideos__swiper = new Swiper('.modalvideos__swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    // centeredSlides: true,
    breakpoints: {
        1400: {
            slidesPerView: 1,
            spaceBetween: 24,
        }
    }
});

try {
    // Collection gallery
    let windoWidth = window.innerWidth
    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    let objectTestValue = ['./image/imgJpg/IMG_4002.jpg', './image/imgJpg/IMG_3984.jpg', './image/imgJpg/IMG_3980.jpg', './image/imgJpg/IMG_3979.jpg', './image/imgJpg/IMG_3998.jpg']
    let newDiv1 = document.createElement('div')
    newDiv1.classList = 'item item-1';
    let newDiv2 = document.createElement('div')
    newDiv2.classList = 'item item-2';
    let newDiv3 = document.createElement('div')
    newDiv3.classList = 'item item-3';
    let btn = document.querySelector('.recentCollection__wr-btn');
    var primerielemnt = document.querySelector('.recentCollection__wrapper')
    var children = [].slice.call(document.querySelector('.recentCollection__wrapper').getElementsByTagName('div'), 0);
    var elemnts = new Array(children.length);
    var arrayLength = children.length;
    let id = 0;

    if (windoWidth > 992) {
        var primerielemnt = document.querySelector('.recentCollection__wrapper')
        var children = [].slice.call(document.querySelector('.recentCollection__wrapper').getElementsByTagName('div'), 0);
        var arrayLength = children.length;
        var elemnts = new Array(children.length);
        for (var i = 0; i < arrayLength; i++) {
            var name = children[i].innerHTML;
            elemnts[i] = name;
        }
        primerielemnt.innerHTML = '';
        let newAllArry = chunk(elemnts, elemnts.length / 3)
        newAllArry[0].forEach((el, i) => {
            //     newDiv1.innerHTML += `<div class="cardStori">
            // <figure >
            // <a class="testPop" href="${objectTestValue[i]}">${el}</a></figure></div>`;
            newDiv1.innerHTML += `<div class="cardStori"  data-bs-toggle="modal"
            data-bs-target="#exampleModal-gallery">
        <figure class"cb-image-grid__image" data-EnCode="${id += 1}" data-src=''>
        ${el}</figure></div>`;
        })
        newAllArry[1].forEach(el => {
            newDiv2.innerHTML += `<div class="cardStori"  data-bs-toggle="modal"
            data-bs-target="#exampleModal-gallery">
        <figure class"cb-image-grid__image" data-EnCode="${id += 1}" data-src=''>
        ${el}</figure></div>`;
        })
        newAllArry[2].forEach(el => {
            newDiv3.innerHTML += `<div class="cardStori"  data-bs-toggle="modal"
            data-bs-target="#exampleModal-gallery">
        <figure class"cb-image-grid__image" data-EnCode="${id += 1}" data-src=''>
        ${el}</figure></div>`;
        })
        primerielemnt.insertAdjacentElement("beforeend", newDiv1)
        primerielemnt.insertAdjacentElement("beforeend", newDiv2)
        primerielemnt.insertAdjacentElement("beforeend", newDiv3)
        VanillaTilt.init(document.querySelectorAll(".cardStori"), {
            max: 5,
            speed: 400
        });
        let textEm_btnMore = document.querySelector('.recentCollection__btnMore > span');
        let textEm_btnMore2 = document.querySelector('.recentCollection__btnMore > span.more');
        let textSpan = textEm_btnMore.innerText;
        let textSpan2 = textEm_btnMore2.innerText;
        let arrayText = textSpan.split('')
        let arrayText2 = textSpan2.split('')
        textEm_btnMore.innerText = ''
        textEm_btnMore2.innerText = ''
        arrayText.forEach(element => {
            // let b = `<span>${element}</span>`
            const temp = document.createElement('span')
            temp.className = 'animations-text';
            temp.innerHTML = ' ' + element
            textEm_btnMore.insertAdjacentElement('beforeend', temp);
        });
        arrayText2.forEach(element => {
            // let b = `<span>${element}</span>`
            const temp = document.createElement('span')
            temp.className = 'animations-text';
            temp.innerHTML = ' ' + element
            textEm_btnMore2.insertAdjacentElement('beforeend', temp);
        });
        $('.recentCollection__btnMore').on('click', function () {

            gsap.fromTo('.animations-text', {
                y: 0,
                rotation: 0,
                // skewY: 1,
                opacity: 1,
                duration: .5,
                // ease: "bounce.inout",
                // stagger: .15,
                stagger: {
                    // grid: [7, 15],
                    // axis: "y",
                    // from:'edges',
                    each: .03,
                    // amount: 0.3

                    // amount: .15
                },

                // ease: "ease",
                // ease: "expo.inout",
                // ease: "expo.inout",
                // ease: "circ.inout",
            }
                , {
                    y: 80,
                    rotation: 10,
                    // skewY: 1,
                    duration: .5,
                    // ease: "bounce.inout",
                    // stagger: .15,
                    stagger: {
                        // grid: [7, 15],
                        // axis: "y",
                        // from:'edges',
                        each: .03,
                        // amount: 0.3

                        // amount: .15
                    },

                    // ease: "ease",
                    // ease: "expo.inout",
                    // ease: "expo.inout",
                    ease: "circ.inout",
                })
            setTimeout(() => {
                $('.recentCollection__wrsvg').addClass('show');
            }, 300);

            setTimeout(() => {
                $('.recentCollection__wrsvg').removeClass('show');
                gsap.fromTo('.animations-text', {
                    y: 80,
                    rotation: 0,
                    // skewY: 1,
                    opacity: 0,
                    duration: .5,
                    // ease: "bounce.inout",
                    // stagger: .15,
                    stagger: {
                        // grid: [7, 15],
                        // axis: "y",
                        // from:'edges',
                        each: .03,
                        // amount: 0.3

                        // amount: .15
                    },

                    // ease: "ease",
                    // ease: "expo.inout",
                    // ease: "expo.inout",
                    ease: "circ.inout",
                }, {
                    y: 0,
                    rotation: 0,
                    // skewY: 1,
                    opacity: 1,
                    duration: .5,
                    // ease: "bounce.inout",
                    // stagger: .15,
                    stagger: {
                        // grid: [7, 15],
                        // axis: "y",
                        // from:'edges',
                        each: .03,
                        // amount: 0.3

                        // amount: .15
                    },

                    // ease: "ease",
                    // ease: "expo.inout",
                    // ease: "expo.inout",
                    // ease: "circ.inout",
                }
                )
                var primerielemntAll = document.querySelectorAll('.recentCollection__wrapper .item')
                let arraynewz = chunk(objectTestValue, objectTestValue.length / 3)

                if (arraynewz[0].length) {
                    arraynewz[0].forEach(el => {
                        newDiv1.innerHTML += `<div class="cardStori testTiager">
                <figure data-EnCode=${id += 1}>
                    <img src="${el}" alt="">
                </figure>
            </div>`;
                    })
                }
                if (arraynewz[1].length) {
                    arraynewz[1].forEach(el => {
                        newDiv2.innerHTML += `<div class="cardStori testTiager">
                        <figure data-EnCode=${id += 1}>
                            <img src="${el}" alt="">
                        </figure>
                    </div>`;
                    })
                }
                if (arraynewz[2].length) {
                    arraynewz[2].forEach(el => {
                        newDiv3.innerHTML += `<div class="cardStori testTiager">
                        <figure data-EnCode=${id += 1}>
                            <img src="${el}" alt="">
                        </figure>
                    </div>`;
                    })
                }
                gsap.fromTo('.testTiager', {
                    y: 80,
                    rotation: 0,
                    opacity: 0,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                    ease: "circ.inout",
                }, {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                }
                )
                setTimeout(() => {

                    $('.cardStori.testTiager').removeClass('testTiager')
                }, 1000);
                VanillaTilt.init(document.querySelectorAll(".cardStori"), {
                    max: 5,
                    speed: 400
                });
            }, 5400);
        })


    }
    else if (windoWidth <= 991) {
        for (var i = 0; i < arrayLength; i++) {
            var name = children[i].innerHTML;
            elemnts[i] = name;
        }
        //خالی کردن دام قبلی
        primerielemnt.innerHTML = '';
        primerielemnt.insertAdjacentElement("beforeend", newDiv1)
        primerielemnt.insertAdjacentElement("beforeend", newDiv2)

        //user funcyion chunk whit slice array
        let newAllArry = chunk(elemnts, elemnts.length / 2)

        newAllArry[0].forEach(el => {
            newDiv1.innerHTML += `<div class="cardStori"  data-bs-toggle="modal"
            data-bs-target="#exampleModal-gallery">
        <figure class"cb-image-grid__image" data-EnCode="${id += 1}" data-src=''>
        ${el}</figure></div>`;
            // newDiv1.innerHTML += `
            // <div class="cardStori"  data-bs-toggle="modal" data-bs-target="#exampleModal-gallery"> <figure class"cb-image-grid__image" data-EnCode="${id += 1}">${el}</figure>
            // </div>`;
        })
        newAllArry[1].forEach(el => {
            newDiv2.innerHTML += `<div class="cardStori"  data-bs-toggle="modal"
            data-bs-target="#exampleModal-gallery">
        <figure class"cb-image-grid__image" data-EnCode="${id += 1}">
        ${el}</figure></div>`;
        })
        let textEm_btnMore = document.querySelector('.recentCollection__btnMore > span');
        let textEm_btnMore2 = document.querySelector('.recentCollection__btnMore > span.more');
        let textSpan = textEm_btnMore.innerText;
        let textSpan2 = textEm_btnMore2.innerText;
        let arrayText = textSpan.split('')
        let arrayText2 = textSpan2.split('')
        textEm_btnMore.innerText = ''
        textEm_btnMore2.innerText = ''
        arrayText.forEach(element => {
            // let b = `<span>${element}</span>`
            const temp = document.createElement('span')
            temp.className = 'animations-text';
            temp.innerHTML = ' ' + element
            textEm_btnMore.insertAdjacentElement('beforeend', temp);
        });
        arrayText2.forEach(element => {
            // let b = `<span>${element}</span>`
            const temp = document.createElement('span')
            temp.className = 'animations-text';
            temp.innerHTML = ' ' + element
            textEm_btnMore2.insertAdjacentElement('beforeend', temp);
        });
        $('.recentCollection__btnMore').on('click', function () {
            gsap.fromTo('.animations-text', {
                y: 0,
                rotation: 0,
                // skewY: 1,
                opacity: 1,
                duration: .5,
                stagger: {
                    // grid: [7, 15],
                    // axis: "y",
                    // from:'edges',
                    each: .03,
                    // amount: 0.3

                    // amount: .15
                },
            }
                , {
                    y: 80,
                    rotation: 10,
                    // skewY: 1,
                    opacity: 0,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                    ease: "circ.inout",
                })
            setTimeout(() => {
                $('.recentCollection__wrsvg').addClass('show');
            }, 300);
            setTimeout(() => {
                $('.recentCollection__wrsvg').removeClass('show');
                gsap.fromTo('.animations-text', {
                    y: 80,
                    rotation: 0,
                    opacity: 0,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                    ease: "circ.inout",
                }, {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                }
                )
                var primerielemntAll = document.querySelectorAll('.recentCollection__wrapper .item')
                let arraynewz = chunk(objectTestValue, objectTestValue.length / 2)
                if (arraynewz[0].length) {
                    arraynewz[0].forEach(el => {
                        newDiv1.innerHTML += `<div class="cardStori testTiager">
                    <figure><img src="${el}"/></figure></div>`;
                    })
                }
                if (arraynewz[1].length) {
                    arraynewz[1].forEach(el => {
                        newDiv2.innerHTML += `<div class="cardStori testTiager">
                    <figure><img src="${el}"/></figure></div>`;
                    })
                }

                gsap.fromTo('.testTiager', {
                    y: 80,
                    rotation: 0,
                    opacity: 0,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                    ease: "circ.inout",
                }, {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: .5,
                    stagger: {
                        each: .03,
                    },
                }
                )
                setTimeout(() => {
                    $('.cardStori.testTiager').removeClass('testTiager')
                }, 1000);

            }, 5400);
        })
    }


} catch (error) {

}
let numberGallery;
$('.recentCollection__wrapper .cardStori').on('click', function () {
    numberGallery = $(this).children('figure').attr('data-EnCode')
    modalGallery__swiper.slideTo(Number(numberGallery), 400)
})

var magnets = document.querySelectorAll('.magnetic');
var strength = 50;

magnets.forEach(magnet => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
    });
});

function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();


    TweenMax.to(magnetButton, 1, {
        x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
        y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
        ease: Power4.easeOut
    });


    // magnetButton.style.transform = 'translate(' + ((((event.clientX - bounding.left) / (magnetButton.offsetWidth))) - 0.5) * strength + 'px,' + ((((event.clientY - bounding.top) / (magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}



// $('.menu-icon').on('mouseenter', function () {
//     onOverMenu($(this));
// });
$('.menu-icon').on('click', function () {
    onOverMenu($(this));
});

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
//# sourceURL=pen.js
let windowWidth = window.innerWidth;
if (windowWidth > 992) {

    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);


    function getAngle(diffX, diffY) {
        return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
        const distance = Math.sqrt(
            Math.pow(diffX, 2) + Math.pow(diffY, 2)
        );
        const maxSqueeze = 0.15;
        const accelerator = 1500;
        return Math.min(distance / accelerator, maxSqueeze);
    }


    const updateCursor = () => {
        const diffX = Math.round(mouse.x - pos.x);
        const diffY = Math.round(mouse.y - pos.y);

        pos.x += diffX * speed;
        pos.y += diffY * speed;

        const angle = getAngle(diffX, diffY);
        const squeeze = getSqueeze(diffX, diffY);

        const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
        const rotate = 'rotate(' + angle + 'deg)';
        const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

        cursor.style.transform = translate;
        cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);



    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(curosrModifier => {
        curosrModifier.addEventListener('mouseenter', function () {
            const attribute = this.getAttribute('cursor-class');
            cursor.classList.add(attribute);
        });

        curosrModifier.addEventListener('mouseleave', function () {
            const attribute = this.getAttribute('cursor-class');
            cursor.classList.remove(attribute);
        });
    });
}
// maths 🤷&zwj;♀️
function fromCenter({ x, y }) {
    return Math.min(Math.max(0, Math.sqrt((y - .5) * (y - .5) + (x - .5) * (x - .5)) / .5), 1);
}

windowWidth = window.innerWidth;
let startScroll = '20px 160%';
let scrollerWrapper;

window.addEventListener('resize', function () {
    windowWidth = window.innerWidth
})
if (windowWidth > 992) {
    startScroll = '20px 160%';
    scrollerWrapper = 'body';
}
if (586 < windowWidth && windowWidth < 992) {
    startScroll = '20px 160%';
    scrollerWrapper = '.wrapperPage';


}
if (585 > windowWidth) {
    startScroll = '20px 80%';
    scrollerWrapper = '.wrapperPage';

}
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.recentCollection .item  div').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            // startTrigger: item - '300px',
            // markers: true,
            scroller: scrollerWrapper,
            start: startScroll,
            end: startScroll,
            // scrub: 1,
            // toggleActions: 'restart restart restart restart'
        },
        y: 100,
        opacity: 0,
        stagger: .2,
        duration: .3
    })
})
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    const lazyLoad = function () {
        if (active === false) {
            active = true;

            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});
if (windowWidth > 992) {
    addEventListener("load", (event) => {
        document.addEventListener('scroll', () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
            if (window.scrollY + 100 >= scrollableHeight) {
                document.querySelectorAll('.recentCollection .item  div').forEach(element => {
                    gsap.to(element, {
                        y: 0,
                        opacity: 1,
                        stagger: .2,
                        duration: .3
                    })
                });
            }
        })
    });
}
else {
    const scrollDemo = document.querySelector(".wrapperPage");
    let scrollout;
    let scroolmoving;
    scrollDemo.addEventListener("scroll", event => {
        scrollout = scrollDemo.scrollTop + scrollDemo.clientHeight;
        scroolmoving = scrollDemo.scrollHeight
        if (scrollout == scroolmoving) {
            document.querySelectorAll('.recentCollection .item  div').forEach(element => {
                gsap.to(element, {
                    y: 0,
                    opacity: 1,
                    stagger: .2,
                    duration: .3
                })
            });
        }
    }, { passive: true });
}
try {
    $('.wrapperPage__back').on('click', function () {
        $('.InspirationFuture_wrContent > div.active').removeClass('active');
        $('.wrapperPage').removeClass('show');
    })
    $('.wrapperPage__back').on('click', function () {
        $('.InspirationFuture_wrContent > div.active').removeClass('active');
        $('.wrapperPage').removeClass('show');
    })

} catch (error) {

}










