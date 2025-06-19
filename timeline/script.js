// gsap.to("#box1",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:4
// })


var tl=gsap.timeline()
tl.from("h2",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.5,
    stagger:1
})
