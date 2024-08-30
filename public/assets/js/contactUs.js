// <======================================== animation in Loading ===========================> 
let blobpage = document.querySelector('.blobpage')
let Contactus__title = document.querySelector('.Contactus__title')
let Contactus__text = document.querySelector('.Contactus__text')
let Contactus__phone = document.querySelector('.Contactus__phone')
let Contactus__email = document.querySelector('.Contactus__email')
let wraperBoxInputAll = document.querySelectorAll('.loginForm .wraperBoxInput')
let sendMessageBtn = document.querySelector('.sendMessageBtn');
let copyRightSpan = document.querySelector('.copyRight span');
blobpage.style.opacity = 0
Contactus__title.style.opacity = 0
Contactus__text.style.opacity = 0
Contactus__phone.style.opacity = 0
Contactus__email.style.opacity = 0
wraperBoxInputAll.forEach(item => {
    item.style.opacity = 0
})
sendMessageBtn.style.opacity = 0

setTimeout(() => {
    var tl = gsap.timeline({ defaults: { duration: .5,ease: "expoScale(0.5,7,none)", }, onComplete: function () { t = setInterval(anim, 50) } });

    tl.fromTo(blobpage, { opacity: 0, x: -100,  }, { opacity: 1, x: 0 });
    tl.fromTo(Contactus__title, { opacity: 0, x: -100,  }, { opacity: 1, x: 0 });
    tl.fromTo(Contactus__text, { opacity: 0, x: -100,  }, { opacity: 1, x: 0 });
    tl.fromTo(Contactus__phone, { opacity: 0, x: -100,  }, { opacity: 1, x: 0 });
    tl.fromTo(Contactus__email, { opacity: 0, x: -100,  }, { opacity: 1, x: 0 });
    wraperBoxInputAll.forEach(item => {
        tl.fromTo(item, { opacity: 0, x: 100, duration: .3, stagger: .3 }, { opacity: 1, x: 0, duration: .3, stagger: .3 });
    })
    tl.fromTo(sendMessageBtn, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: .5 });

    // cleaer perops
    tl.set(blobpage, { clearProps: "all" });
    tl.set(Contactus__title, { clearProps: "all" });
    tl.set(Contactus__text, { clearProps: "all" });
    tl.set(Contactus__phone, { clearProps: "all" });
    tl.set(Contactus__email, { clearProps: "all" });
    wraperBoxInputAll.forEach(element => {
        tl.set(element, { clearProps: "all" });
    });
    tl.set(sendMessageBtn, { clearProps: "all" });
}, 10000);




let funid = function (id) {
    return document.getElementById(id);
};
let inc = 0;
let out = 0;
let str = 'Karo Studio';
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
let t;
let isEnding = false;
let anim = function () {
    inc++;
    if (inc % 7 === 0 && out < str.length) {
        funid('anim').appendChild(document.createTextNode(str[out]));
        out++;
    } else if (out >= str.length) {
        funid('shuffle').innerText = '';
        clearInterval(t);
        isEnding = true;
    }
    $('shuffle').innerHTML =
        chars[Math.floor(Math.random() * chars.length)];
    if (isEnding) {
        funid('shuffle').innerText = '';
    }
};
funid('anim').innerHTML = '';






































let boxBordfer = document.querySelector('.boxBorder')
// console.log(boxBordfer);
function setFocus(on) {
    var element = document.activeElement;
    if (on) {
        setTimeout(function () {

            // console.log(element.tagName === 'TEXTAREA');
            if (element.tagName === 'TEXTAREA') {

                let v = element.parentNode.offsetTop
                gsap.to(boxBordfer, {
                    height: element.parentNode.clientHeight + 4 + 'px', opacity: 1, y: v, ease: "power1.out", duration: .3,
                });
                if (!element.parentNode.classList.contains('focus')) {

                    let textSpan = element.nextElementSibling.innerText;
                    let textEm_btnMore = element.nextElementSibling;
                    let arrayText = textSpan.split('')
                    textEm_btnMore.innerText = ''
                    arrayText.forEach(element => {
                        // let b = `<span>${element}</span>`
                        const temp = document.createElement('span')
                        temp.className = 'animations-text';
                        temp.innerHTML = ' ' + element
                        textEm_btnMore.insertAdjacentElement('beforeend', temp);
                    });
                    gsap.to(element.nextElementSibling.children, {
                        fontSize: 14, y: -20, ease: "power1.out", duration: .3, stagger: {
                            each: .03,
                        },
                    });
                }

            } else {
                // if (element.className == 'wraperBoxInput focus') {
                //     console.log(1);
                // }
                v = element.parentNode.offsetTop
                let textSpan = element.nextElementSibling.innerText;
                let textEm_btnMore = element.nextElementSibling;
                gsap.to(boxBordfer, {
                    height: element.parentNode.clientHeight + 4 + 'px', opacity: 1, y: v, ease: "power1.out", duration: .3,
                });
                if (!element.parentNode.classList.contains('focus')) {

                    let arrayText = textSpan.split('')
                    textEm_btnMore.innerText = ''
                    arrayText.forEach(element => {
                        const temp = document.createElement('span')
                        temp.className = 'animations-text';
                        temp.innerHTML = element == ' ' ? '&nbsp;' + element : element
                        textEm_btnMore.insertAdjacentElement('beforeend', temp);
                    });
                    gsap.to(element.nextElementSibling.children, {
                        fontSize: 14, y: -20, ease: "power1.out", duration: .3, stagger: {
                            each: .03,
                        },
                    });
                }
            }
            element.parentNode.classList.add("focus");
        });
    } else {
        // console.log(1);
        let box = document.querySelector("body");
        box.classList.remove("focus");
        $("input").each(function () {
            var $input = $(this);
            var $parent = $input.closest(".wraperBoxInput");
            var $parentL = $parent.children('label');
            if ($input.val()) {
                $parent.addClass("focus");
            }
            else {

                if ($parent.hasClass('focus')) {
                    gsap.to($parentL.children('span'), {
                        fontSize: 24, y: 0, ease: "power1.out", duration: .3, stagger: {
                            each: .03,
                        },
                    });

                }
                $parent.removeClass("focus");
                boxBordfer.style.opacity = 0
            }

        });
        $("textarea").each(function () {
            var $input = $(this);
            var $parent = $input.closest(".wraperBoxInput");
            var $parentL = $parent.children('label');
            if ($input.val()) {
                $parent.addClass("focus");
            }
            else {

                if ($parent.hasClass('focus')) {
                    gsap.to($parentL.children('span'), {
                        fontSize: 24, y: 0, ease: "power1.out", duration: .3, stagger: {
                            each: .03,
                        },
                    });

                }
                $parent.removeClass("focus");
                boxBordfer.style.opacity = 0
            }

        });


    }
}

$('textarea').val('')


let ContactusPhone = document.querySelector('.Contactus__phone');
let ContactusPhoneValue = document.querySelector('.Contactus__phone-value');
let textSpan = ContactusPhoneValue.innerText;
let arrayText = textSpan.split('');
ContactusPhoneValue.innerText = '';
arrayText.forEach(element => {
    // let b = `<span>${element}</span>`
    const temp = document.createElement('span')
    temp.className = 'animations-text';
    temp.innerHTML = element == ' ' ? '&nbsp;' + element : element
    ContactusPhoneValue.insertAdjacentElement('beforeend', temp);
});
ContactusPhone.addEventListener('mouseenter', function () {
    gsap.to('.Contactus__phone-value span', {
        y: -10, ease: "power1.out", duration: .3, stagger: {
            each: .03,
        },
    });
})
ContactusPhoneValue.addEventListener('mouseleave', function () {
    gsap.to('.Contactus__phone-value span', {
        y: 0, ease: "power1.out", duration: .3, stagger: {
            each: .03,
        },
    });
})
ContactusPhone.addEventListener('mouseleave', function () {
    gsap.to('.Contactus__phone-value span', {
        y: 0, ease: "power1.out", duration: .3, stagger: {
            each: .03,
        },
    });
})




let ContactusEmail = document.querySelector('.Contactus__email');
let ContactusEmailValue = document.querySelector('.Contactus__email-value');
let textSpan1 = ContactusEmailValue.innerText;
let arrayText1 = textSpan1.split('');
ContactusEmailValue.innerText = '';
// console.log(arrayText);
arrayText1.forEach(element => {
    // let b = `<span>${element}</span>`
    const temp = document.createElement('span')
    temp.className = 'animations-text';
    temp.innerHTML = element == ' ' ? '&nbsp;' + element : element
    ContactusEmailValue.insertAdjacentElement('beforeend', temp);
});
ContactusEmail.addEventListener('mouseenter', function () {

    gsap.to('.Contactus__email-value span', {
        y: -10, ease: "power1.out", duration: .3, stagger: {
            each: .03,
        },
    });
})
ContactusEmailValue.addEventListener('mouseleave', function () {
    gsap.to('.Contactus__email-value span', {
        y: 0, ease: "power1.out", duration: .3, stagger: {
            each: .03,
        },
    });
})
ContactusEmail.addEventListener('mouseleave', function () {
    gsap.to('.Contactus__email-value span', {
        y: 0, ease: "power1.out", duration: .3, stagger: {
            each: .03,
        },
    });
})







