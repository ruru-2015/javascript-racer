
$(document).ready(function () {

  $(document).on("keydown", function(e) {
    e.preventDefault();
    console.log(e);
  });

  $(document).keydown( function(event) {
    if (event.keyCode == 81) {
      if ( $(".player1").find("td:last").hasClass("present") ) {
        alert("Player 1 has won!");
      } else {
        $(".player1").find(".present").next().addClass("present");
        $(".player1").find(".present:first").removeClass("present");
      };
    } else if (event.keyCode == 80) {
      if ( $(".player2").find("td:last").hasClass("present") ) {
        alert("Player 2 has won!");
      } else {
        $(".player2").find(".present").next().addClass("present");
        $(".player2").find(".present:first").removeClass("present");
      };
    };
  });
});
