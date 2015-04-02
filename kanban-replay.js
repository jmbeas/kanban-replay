(function (document, $, storage) {
  $(document).ready(function() {
    var columns = ["to-do","wip","done"];
    for (i = 0; i < columns.length; i++) {
      var new_column = $("<div>").addClass("col").attr("id",columns[i]);
      $("#board").append(new_column);
    }
    var new_card = $("<div>").addClass("card");
    $("#to-do").append(new_card);
  });
})(document, jQuery, localStorage);
