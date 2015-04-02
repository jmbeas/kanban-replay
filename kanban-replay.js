function Board(element) {
  this.theBoard = element;
  this.createColumns = function(columns) {
    for (i = 0; i < columns.length; i++) {
      var column_name = columns[i];
      var new_column = $("<div>").addClass("col").attr("id",column_name);
      var column_title = $("<div>").addClass("col-title").text(column_name);
      new_column.append(column_title)
      this.theBoard.append(new_column);
    }
  };
}

function Card() {
  return $("<div>").addClass("card");
}

(function (document, $, storage) {
  $(document).ready(function() {
    var theBoard = new Board( $("#board") );
    theBoard.createColumns( ["to-do","wip","done"] );
    var new_card = new Card();
    $("#to-do").append(new_card);
  });
})(document, jQuery, localStorage);
