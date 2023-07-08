$('document').ready(function() {
  //calling function for carousel
  initCarousel1();
  initCarousel2()
  initCarousel3()
})

//function for initialize about page carousel
function initCarousel1(){
  $('#owl-about').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1
  })
}

//function for initialize home page carousel
function initCarousel2(){
  $('#owl-home').owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {0: {items: 3}, 400: {items: 4}, 1000: {items:8}}
  })
}

//function for initialize our team members carousel in about section
function initCarousel3(){
  $('#our-team').owlCarousel({
    loop:true,
    autoplay:true,
    responsive: {0: {items: 1}, 400: {items: 2}, 900: {items:4}}
  })
}