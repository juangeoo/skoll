// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 100)+"px; left: "+(e.pageX - 100 )+"px;");
})


function cambioMouse(){
   cursor.classList.add("mousechange");
}


function cambioMouseRemove(){
    cursor.classList.remove("mousechange");
 }

// SCROLLMAGIC

   var controller = new ScrollMagic.Controller();

     var scene = new ScrollMagic.Scene({
        triggerElement: ".ourbeers__container-box",
        triggerHook: .7
     })
     .setClassToggle(".ourbeers__container-box", "showizq")             
     .addTo(controller);
  
//LOCOMOTIVE SCROLL

   const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
  });


