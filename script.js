// Design is the starting active page
let SlidesArray = $('#contentPageDesign').children();

// Always starts with the the first slide of the current selected tab
let currentPage = SlidesArray.first();

// Hide prev arrow button
$('.prev').hide()

function portfolio(evt, tab) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  SlidesArray = $(`#contentPage${tab}`).children();
  currentPage = SlidesArray.first();

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.target.className += " active";
};



$('.next').on('click', function(e) {
  const nextPage = currentPage.next()

  currentPage.removeClass('active');
  currentPage = nextPage.addClass('active');

  // Not yet the last slide
  if (SlidesArray.last().is(nextPage)) {
    $('.next').hide()
    $('.prev').show();
  } else {
    $('.next').show()
    $('.prev').show();
  }
});

$('.prev').on('click', function(e) {
  // Stays in the first element
  const prevPage = currentPage.prev()

  currentPage.removeClass('active');
  currentPage = prevPage.addClass('active');

  // Not yet the first slide
  if (SlidesArray.first().is(currentPage)) {
    $('.prev').hide()
  }
  else {
    $('.next').show()
    $('.prev').show();
  }
});
