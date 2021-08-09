const circle_logo1 = document.getElementById('circle_logo1').getBoundingClientRect();
const logo_img = document.getElementById('logo_img').getBoundingClientRect();
const bodyRect = document.body.getBoundingClientRect();
console.log("Circle Logo 1 Dimensions: TRBL ",circle_logo1.top, circle_logo1.right, circle_logo1.bottom, circle_logo1.left);
console.log("Circle Logo Dimensions: TRBL ",logo_img.top, logo_img.right, logo_img.bottom, logo_img.left);
console.log("Difference: TRBL ",(circle_logo1.top- logo_img.top), (circle_logo1.right - logo_img.right), (circle_logo1.bottom - logo_img.bottom), (circle_logo1.left - logo_img.left));
console.log("Body Dimensions: TRBL ",bodyRect.top, bodyRect.right, bodyRect.bottom, bodyRect.left);
var tl1 = new TimelineMax({onUpdate:updatePercentage1});
var tl2 = new TimelineMax({onUpdate:updatePercentage2});
var tl3 = new TimelineMax({onUpdate:updatePercentage3});
var tl4 = new TimelineMax({onUpdate:updatePercentage4});
const controller = new ScrollMagic.Controller();

tl1.to("#logo_img", 1, {
    x: -1103,
    y: 735,
    rotation: 360,
    duration: 1,
    scale: 0.2,
    zIndex: 2
})
tl2.to("#logo_img", 1, {
    x: -1225,
    y: 1485,
    rotation: 360,
    duration: 1,
    scale: 0.28,
    zIndex: 2
})
tl3.to("#logo_img", 1, {
    x: -650,
    y: 2320,
    rotation: 342,
    duration: 1,
    scale: 1.45,
    zIndex: 2
})
tl4.to("#logo_img", 1, {
    x: -625,
    y: 2895,
    rotation: 0,
    duration: 1,
    scale: 0.28,
    zIndex: 2
})


const scene = new ScrollMagic.Scene({
    triggerElement: ".earn_bx",
}).setTween(tl1).addTo(controller);
const scene2 = new ScrollMagic.Scene({
    triggerElement: ".customer_section",
}).setTween(tl2).addTo(controller);
const scene3 = new ScrollMagic.Scene({
    triggerElement: ".get_more_bx",
}).setTween(tl3).addTo(controller);
const scene4 = new ScrollMagic.Scene({
    triggerElement: ".soudi_pioneer",
}).setTween(tl4).addTo(controller);

function updatePercentage1() {
    // console.log(controller());
}
function updatePercentage2() {
    // console.log(controller());
}
function updatePercentage3() {
    // console.log(controller());
}
function updatePercentage4() {
    // console.log(controller());
}