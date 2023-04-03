// function SetStyle(selectObj) {
//   $("text-wrapper")
//     .is('[contenteditable="true"]')
//     .css("font-family", selectObj.value);
// }

function SetStyle(selectObj) {
  $('.text-wrapper > [contenteditable="true"]').css(
    "font-family",
    selectObj.value
  );
}

function SetColor(selectObj) {
  $('.text-wrapper > [contenteditable="true"]').css("color", selectObj.value);
}

function SetSize(selectObj) {
  $('.text-wrapper > [contenteditable="true"]').css(
    "font-size",
    selectObj.value + "px"
  );
}

function ToggleBold() {
  $('.text-wrapper > [contenteditable="true"]').css(
    "font-weight",
    $('.text-wrapper > [contenteditable="true"]').css("font-weight") == "bold"
      ? "normal"
      : "bold"
  );
}

function ToggleItalic() {
  $('.text-wrapper > [contenteditable="true"]').css(
    "font-style",
    $('.text-wrapper > [contenteditable="true"]').css("font-style") == "italic"
      ? "normal"
      : "italic"
  );
}

function ToggleUnderline() {
  $('.text-wrapper > [contenteditable="true"]').css(
    "text-decoration",
    $('.text-wrapper > [contenteditable="true"]').css("text-decoration") ==
      "underline"
      ? "none"
      : "underline"
  );
}

function ToggleStrike() {
  $('.text-wrapper > [contenteditable="true"]').css(
    "text-decoration",
    $('.text-wrapper > [contenteditable="true"]').css("text-decoration") ==
      "line-through"
      ? "none"
      : "line-through"
  );
}

function SetLeft() {
  $('.text-wrapper > [contenteditable="true"]').css("text-align", "left");
}

function SetCenter() {
  $('.text-wrapper > [contenteditable="true"]').css("text-align", "center");
}

function SetRight() {
  $('.text-wrapper > [contenteditable="true"]').css("text-align", "right");
}

function ToggleEdit(editButton) {
  $(".text-wrapper > *").attr(
    "data-editable",
    $(".text-wrapper > *").attr("data-editable") == "true" ? "false" : "true"
  );

  editButton.innerHTML =
    $(".text-wrapper > *").attr("data-editable") == "true" ? "Save" : "Edit";

  $(".text-wrapper > *").attr("contenteditable", false);
}

function StartEdit(element) {
  $('.text-wrapper > [contenteditable="true"]').attr("contenteditable", false);
  if ($(element).attr("data-editable") == "true") {
    element.contentEditable = true;
  }

  element.focus();
}
