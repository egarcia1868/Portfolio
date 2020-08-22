$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel({interval: 2000});
    
  // switch if word is hovered over
  $(".html").hover(function(){
    $("#myCarousel").carousel(0);
  });
  $(".css").hover(function(){
    $("#myCarousel").carousel(1);
  });
  $(".javascript").hover(function(){
    $("#myCarousel").carousel(2);
  });
  $(".python").hover(function(){
    $("#myCarousel").carousel(3);
  });
  $(".jquery").hover(function(){
    $("#myCarousel").carousel(4);
  });
  $(".ajax").hover(function(){
    $("#myCarousel").carousel(5);
  });
  $(".react").hover(function(){
    $("#myCarousel").carousel(6);
  });
  $(".handlebars").hover(function(){
    $("#myCarousel").carousel(7);
  });
  $(".mysql").hover(function(){
    $("#myCarousel").carousel(8);
  });
  $(".mongodb").hover(function(){
    $("#myCarousel").carousel(9);
  });
  $(".heroku").hover(function(){
    $("#myCarousel").carousel(10);
  });
  $(".git").hover(function(){
    $("#myCarousel").carousel(11);
  });
  $(".github").hover(function(){
    $("#myCarousel").carousel(12);
  });

  $("#myCarousel").on('slid.bs.carousel', function (){
    changeActiveFont()
  });


});
let count = 0;
let firstCount = true;

function changeActiveFont() {
  const iconList = ["html", "css", "javascript", "python", "jquery", "ajax", "react", "handlebars", "mysql", "mongodb", "heroku", "git", "github"];
  
  if (count === 13) {
    count = 0
  }
  
  if (firstCount === true) {
    firstCount = false
  } else if (count === 0) {
    $(`#${iconList[12]}`).removeClass("red")
  } else {
    $(`#${iconList[count]-1}`).removeClass("red")
  }

  if ($(`#${iconList[count]}`).hasClass("active")) {
    $(`.${iconList[count]}`).addClass("red")
  }

  //COUNT IS NOT RESETTING ALONG WITH THE "HOVERED" NAME.  NEED TO FIGURE OUT HOW TO GET THESE IN SYNC
  

  count++
}

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
