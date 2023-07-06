const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y: "0vh",
    duration: 1,
    scale: 0.5
})

tl.from("#page1",{
    rotate: 360,
    duration: 1.5,
    delay: 0.1,
    scale: 0
})