
gsap.from('#Home .animate', {opacity: 0, duration: 0.5, y: -50, delay:0.5, stagger:0.5});
gsap.from('#Home', {opacity: 0, duration: 0.5, y: -50});
let t1= gsap.timeline({
  scrollTrigger:{
    trigger: '#About',
  }
});
t1.from(".pic1,.pic2",{ x: 200, opacity: 0, duration: 1.5})
   .from(".about_us,.lead", {y: 300, opacity: 0, duration: 1}, "-=1")

 let t2 = gsap.timeline({
   scrollTrigger:{
     trigger:'#menu',
   }
 });
 t2.from(".card",{ x: 300, opacity: 0, duration: 1.5})

  let t3 = gsap.timeline({
    scrollTrigger:{
      trigger:'#offer',

    }
  });
  t3.from("#offer",{ y: 200, opacity: 0, duration: 1.5})
  let t4 = gsap.timeline({
    scrollTrigger:{
      trigger:'#location',
    }
  });
  t4.from("#location",{ y: 100, opacity: 0, duration: 1.5})
