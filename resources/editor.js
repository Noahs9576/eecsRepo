$(document).ready(function() {
  fetch("/getDoc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function(response){
    return response.json();
  }).then(function(data){
    const urlParams = new URLSearchParams(window.location.search);
    const document = data[urlParams.get('doc')];

    if(!isNil(document)){
      console.log($('.text-wrapper > .header').text(document.name.text));
      $('.text-wrapper > .header').text(document.name.text);
      $('.text-wrapper > .header').css('font-family', document.name.fontFamily);
      $('.text-wrapper > .header').css('font-size', document.name.fontSize);
      $('.text-wrapper > .header').css('color', document.name.color);
      $('.text-wrapper > .header').css('font-weight', document.name.fontWeight);
      $('.text-wrapper > .header').css('text-decoration', document.name.textDecoration);
      $('.text-wrapper > .header').css('text-align', document.name.textAlign);

      $('.text-wrapper > .text').text(document.content.text);
      $('.text-wrapper > .text').css('font-family', document.content.fontFamily);
      $('.text-wrapper > .text').css('font-size', document.content.fontSize);
      $('.text-wrapper > .text').css('color', document.content.color);
      $('.text-wrapper > .text').css('font-weight', document.content.fontWeight);
      $('.text-wrapper > .text').css('text-decoration', document.content.textDecoration);
      $('.text-wrapper > .text').css('text-align', document.content.textAlign);
    }
});
});

function SetFont(selectObj) {
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

function UploadDoc(){
  var document = {
    name: {
      text : $('.header').text(),
      fontFamily : $('.header').css('font-style'),
      fontSize : $('.header').css('font-size'),
      color : $('.header').css('color'),
      fontWeight : $('.header').css('font-weight'),
      textDecoration : $('.header').css('text-decoration'),
      textAlign : $('.header').css('text-align'),
    }, 
    content: {
      text: $('.text').text(),
      fontFamily : $('.text').css('font-style'),
      fontSize : $('.text').css('font-size'),
      color : $('.text').css('color'),
      fontWeight : $('.text').css('font-weight'),
      textDecoration : $('.text').css('text-decoration'),
      textAlign : $('.text').css('text-align'),
    }
  };

  fetch("/upload", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(document)
})
}

function isNil(object){
  if (typeof object === 'undefined' || object === null) {
      return true;
  }

  if (typeof object === 'string' && object === '') {
      return true;
  }

  return false;
}

