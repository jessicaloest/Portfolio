function portfolio(evt, tab) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.target.className += " active";
};

// const refs = {};
// $('.tabcontent').each((i,el) => {
//   console.log('el is:', el.id)
//   let id = el.id
//   const grandKidsAsJqueryObjs = $(`#${id}`).find('.contentPage').children();
//   refs[id] = grandKidsAsJqueryObjs;
//   //refs[id] = $(`#${id}`).find('.contentPage').children();
//   //console.log('GRAND KIDS:', $(`#${id}`).find('.contentPage').children())
// });

// refs[currentTabId];

// let activeTab = '#Design';
// ['#Design', '#Frontend', '#Video'].forEach((id) => {
//   console.log('HI', id, $(id));
//   $(id).on('click', () => {
//     console.log('Clicked on', id)
//     activeTab = id;
//   })
// });


// refs[activeTab]; // will give you the grandchildren to loop through.


//var tabs = $('.tabcontent')

const showPage = $('.page')
let currentPage = showPage.filter('.active');

$('.next').on('click', function(e) {
  const nextPage = currentPage.next()

  currentPage.removeClass('active');
  currentPage = nextPage.addClass('active');
  if (nextPage.length <= 1) {
    $('.next').hide()
  }
});

$('.prev').on('click', function(e) {
  const prevPage = currentPage.prev();

  currentPage.removeClass('active');

  if (prevPage.length) {
    $('.next').show()
    currentPage = prevPage.addClass('active');
  } else {
    currentPage = showPage.last().addClass('active');
  }
});
