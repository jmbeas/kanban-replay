function Board(element) {
  this.theBoard = element;
  this.createColumns = function(columns) {
    for (i = 0; i < columns.length; i++) {
      var column_name = columns[i];
      var new_column = $("<div>").addClass("col").attr("id",column_name);
      var column_title = $("<div>").addClass("col-title").text(column_name);
      var container = $("<div>").addClass("cards");
      new_column.append(column_title).append(container);
      this.theBoard.append(new_column);
    }
  }
}

function Card(cardId,description) {
  this.id = cardId;
  if ( description ) {
    this.description = description;
  } else {
    this.description = this.id;
  }
  this.moveToColumn = function(element,newColumn) {
    var card = element.detach();
    newColumn.append(card);
  };
  return $("<div>").addClass("card").attr("id","card-"+this.id).append($("<p>").text(this.description));
}

(function (document, $, storage) {
  $(document).ready(function() {
    var theBoard = new Board( $("#board") );
    theBoard.createColumns( ["to-do","wip","done"] );
    var new_card = new Card("ABC");
    new_card.appendTo($("#to-do .cards"));
    $(document).on('click', "#card-ABC", function (){
      $(this).fadeOut('slow',function () {
        var nextColumn = $( "#"+$(this).parent().parent().next().attr("id")+" .cards" );
        $(this).appendTo( nextColumn ).fadeIn('slow');
      });
    });
  });
})(document, jQuery, localStorage);
