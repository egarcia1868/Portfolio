
function animeFunc(id) {
  let textWrapper = document.querySelector(`#${id}`);
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: `#${id} .letter`,
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 30 * (i+1),
    });
};


animeFunc("idea");

setTimeout(function() {
  animeFunc("revamp");
  unhider("revamp");
  setTimeout(function() {
    animeFunc("hand");
    unhider("hand");
    setTimeout(function() {
      animeFunc("chat1");
      unhider("chat1");
      setTimeout(function() {
        animeFunc("chat2");
        unhider("chat2");
      }, 600);
    }, 1700);
  }, 2000);
}, 1800);

function unhider(id) {
  setTimeout(function() {
    $(`#${id}`).removeAttr("hidden")
  }, 100)
};


// let coll = document.getElementsByClassName("collapsible");
// let i;
// let mouse = false;


// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("mouseenter", function() {
//     // this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
//   coll[i].addEventListener("mouseleave", function() {
//     // this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }