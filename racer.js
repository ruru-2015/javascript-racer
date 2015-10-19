var moveSize = parseInt($('#track-one').css('width'))
var gameWon = false

function increaseWidth(i){
  return $(this).width() + (i+moveSize)
}

$(window).keydown(function(e){
  if(!gameWon){
    if(e.which == 90 || e.which == 65){
      $("#track-one").css('width', increaseWidth)
    }
    if(parseInt($("#track-one").css('width')) >= moveSize*100){
      alert("Blue player wins!");
      gameWon = true
    }
  }
})

$(window).keydown(function(e){
  if(!gameWon){
    if(e.which == 80 || e.which == 76){
      $("#track-two").css('width', increaseWidth)
    }
    if(parseInt($("#track-two").css('width')) >= moveSize*100){
      alert("Red player wins!");
      gameWon = true
    }
  }
})

while(currentWidth<targetWidth)
  currentWidth++