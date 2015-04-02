(function (document, $, storage) {
  $(document).ready(function() {
    var columns = ["to-do","wip","done"];
    for (i = 0; i < columns.length; i++) {
      var column_name = columns[i];
      var new_column = $("<div>").addClass("col").attr("id",column_name);
      var column_title = $("<div>").addClass("col-title").text(column_name);
      new_column.append(column_title)
      $("#board").append(new_column);
    }
    var new_card = $("<div>").addClass("card");
    $("#to-do").append(new_card);
  });
})(document, jQuery, localStorage);
