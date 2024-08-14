gsap.registerPlugin(ScrollTrigger)
let tlOne = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-one',
    start: "top",
    // end: "bottom",
    pin: ".line-one",
  }
})

let tlwo = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-two',
    start: "top",
    end: "bottom",
    pin: '.line-two'
  }
})

let tlThree = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-three',
    start: "top",
    end: "bottom",
    markers: true,
    scrub: true,
    pin: '.line-three'
  }
})

tlOne.from(".line-one span",{
  y: 500,
  stagger: 0.2,
  scrub: true,
}).to(".container",{
  backgroundColor:"yellow"
}).from('.sun',{
  x: 400,
  scrub: true,
})

tlOne.to(".container",{
  backgroundColor:"white"
}).to('.sun',{
  x:-2000
}, "<").to('.line-one span',{
  x: 2000
}, "<")

// tlwo.from(".line-two span",{
//   opacity:0,
//   scale:10,
// })

tlwo.from(".line-two span:first-child",{
  scale:7,
  x:-1000
}, "<").from(".line-two span:last-child",{
  scale:7,
  x:1000
}, "<")

tlwo.to(".line-two span:first-child",{
  y:-20
})
.to(".line-two span:first-child",{
  y:0
})
.to(".line-two span:last-child",{
  y:-20
}, "<")
.to(".line-two span:last-child",{
  y:0
})


tlThree.from(".line-three span",{
  y: 500,
  stagger: 0.2,
}).to(".line-three span",{
  color:"white",
  stagger: 0.2,
}).to(".line-three",{
  backgroundColor:"#000000",
  stagger: 0.2,
})

// .from('.moon',{
//   x: 400,
//   scrub: true,
// })