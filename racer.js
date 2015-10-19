$(function() {
  setupBoard()
  bindKeys()
})

function setupBoard() {
  $('table td').removeClass('active')
  $('table .player1 td:first').addClass('active')
  $('table .player2 td:first').addClass('active')
}

function bindKeys() {
  $('body').keydown(function(e) {
    if(e.keyCode == 81) {
      movePlayer(1)
    } else if(e.keyCode == 80) {
      movePlayer(2)
    }
  })
}

function movePlayer(num) {
  var currentCell = $('table tr.player' + num + ' .active')
  nextCell = currentCell.next()
  if (nextCell[0]) {
    currentCell.removeClass('active')
    nextCell.addClass('active')
  } else {
    alert("Player " + num + " is victorious")
    setupBoard()
  }
}
