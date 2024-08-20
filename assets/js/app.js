var tl = gsap.timeline();
tl.to("#nav", {
    y: 0, 
    duration: 0.6,
    opacity:1,
    delay:0.5,
});
tl.to("#link", {
    y: 0, 
    duration: 0.6,
    opacity:1,
    delay:0.9,
    stagger:0.7,
});
tl.to(".text", {
    duration: 3,
    opacity:1,
    delay:0.9,
    scale:1,
});
var tl = gsap.timeline({
    scrollTrigger : { 
        trigger:"#page2" , 
    start: 'top top',
    pinSpacing:false,
    end:"+=200%",
    scrub:1,
    pin: true,
    markers:true,
    }
}
);
tl.to('#page2 h2', {
    xPercent:-120,
});
var tl = gsap.timeline(
    {
        scrollTrigger:{ 
            trigger:"#page3",
            pinSpacing:false,
        start: 'top top',
        end:"bottom 100%",
        scrub:1,
        pin: true,
        markers:true,
        yoyo:true,
        yoyoEase:true,
        }
    }
);
tl.to('#page3 h3', {
    y:200,
    rotation: 360, 
    ease: "power1.inOut"
});
var tl = gsap.timeline({
    scrollTrigger:{ 
        trigger:"#page4",
    start: 'top 0%',
    end:"+=600%",
    pinSpacing:false,
    scrub:1,
    pin: true,
    markers:true,
    yoyo:true,
    yoyoEase:true,
    }
});
tl.to('.text_name', {
    x:60,
    duration: 1, 
});