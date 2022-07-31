// option 2 - Jquery Smooth Scroll
$('.navbar a').on('click', function(e) {
  const hash = this.hash;
  if (hash !== '') {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800)
  }
})