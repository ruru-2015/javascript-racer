var moveSize = $('#track-one').css('width')
var gameWon = false

function increaseWidth(i){
  return $(this).width() + (i+parseInt(moveSize))
}

$(window).keydown(function(e){
  if(!gameWon){
    if(e.which == 90 || e.which == 65){
      $("#track-one").css('width', increaseWidth)
    }
    if(parseInt($("#track-one").css('width')) >= parseInt(moveSize)*100){
      alert("Blue player wins!");
      gameWon = true
    }
  }
})

$(window).keydown(function(e){
  if(!gameWon){
    if(e.which == 190 || e.which == 186){
      $("#track-two").css('width', increaseWidth)
    }
    if(parseInt($("#track-two").css('width')) >= parseInt(moveSize)*100){
      alert("Red player wins!");
      gameWon = true
    }
  }
})
