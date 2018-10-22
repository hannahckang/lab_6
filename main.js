$(document).on("click", ".delete-item", function() {
  $(this)
    .parent()
    .remove();
});

$(document).on("click", "#add-item", function() {
  var list = $("#grocery-list");
  var itemInput = $("#new-list-item");
  list.append(
    "<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>"
  );
});

$(document).on("click", ".complete-item", function() {
  if ($(this).is(":checked")) {
    $(this)
      .parent()
      .css("text-decoration", "line-through");
  } else {
    $(this)
      .parent()
      .css("text-decoration", "none");
  }
});
