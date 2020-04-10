// let htmls = $('#chat').textContent
// let htmls = $('#chat').val()
// let htmls = $('#chat').innerHTML
// let htmls = $('#chat').text;

// console.log("chat: " + htmls)

// let test = $("#chat").text().trim();
// console.log("Text: " + test);
// console.log("length: " + test.length);

// Wrap every letter in a span
var textWrapper = document.querySelector('.chat1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper2 = document.querySelector('.chat2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.chat1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1),
  })
// console.log(textWrapper)

function secondTO() {
  setTimeout(function() {
    $(".chat2").removeAttr("hidden")
  }, 100)
  
}

window.setTimeout(function() {
  // $('.chat2').replaceWith(`<span class="chat2"> and see how I can help!</span>`);
  $(".chat1").removeAttr("hidden")
  var textWrapper2 = document.querySelector('.chat2');
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.chat2 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1),
  });
  secondTO();

}, 1500)

  // and see how I can help!


  // .add({
  //   targets: '#chat',
  //   easing: 'steps(1)',
  //   update: function() {
  //     textWrapper.innerHTML.replaceWith(`<a style="text-decoration: none" href="mailto:egarcia1868@gmail.com">Let's chat</a> and see how I can help!`)
  //   }
  // })
  // .add({
  //   targets: '#chat',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000
  // });