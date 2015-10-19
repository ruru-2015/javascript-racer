function movePlayer(num) {
  cell = $('.player' + num + ' .active')
  cell.removeClass('active')
  cell.next().addClass('active')
  if ($('.player' + num + ' td:last').hasClass('active')) {
    if (!alert('Player ' +num+' winna winna!')) {
      window.location.reload();
    }
  }
}

$(document).keypress(function(e) {
 console.log(e)
})
$(document).keydown(function(e) {
 console.log(e)
})

$(document).keyup(function(e) {
  console.log(e)
  if(e.which == 113) { 
    movePlayer(1)
  } else if(e.which == 112) { 
    movePlayer(2)
  }
})
