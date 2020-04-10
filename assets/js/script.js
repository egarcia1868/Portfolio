function animeFunc(id) {;
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
