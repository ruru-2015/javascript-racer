function addKlass(klass){
  $('.'+ klass).next().addClass(klass)
}

function removeKlass(klass){
  $('.'+ klass).prev().removeClass(klass)
}

$(document).keypress(function(e) {
  if(e.which == 113 && $('.player1 td:nth-last-child(2)').hasClass('p1')) {
    addKlass('p1') & removeKlass('p1')
    if(!alert('Player 1 winna winna!')){window.location.reload();}
  }else if (e.which == 113) {
    addKlass('p1') & removeKlass('p1')
  }
})


$(document).keypress(function(e) {
  if(e.which == 112 && $('.player2 td:nth-last-child(2)').hasClass('p2')) {
    addKlass('p2') & removeKlass('p2')
    if(!alert('Player 2 winna winna!')){window.location.reload();}
  }else if (e.which == 112) {
    addKlass('p2') & removeKlass('p2')
  }
})
