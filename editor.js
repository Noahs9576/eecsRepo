function SetStyle(selectObj){
    $("textarea").css("font-family", selectObj.value);
}

function SetColor(selectObj){
    $("textarea").css("color", selectObj.value);
}

function SetSize(selectObj){
    $("textarea").css("font-size", selectObj.value + "px");
}

function ToggleBold(){
    $("textarea").css("font-weight", $("textarea").css("font-weight") == "bold" ? "normal" : "bold"); 
}

function ToggleItalic(){
    $("textarea").css("font-style", $("textarea").css("font-style") == "italic" ? "normal" : "italic");
}

function ToggleUnderline(){
    $("textarea").css("text-decoration", $("textarea").css("text-decoration") == "underline" ? "none" : "underline");
}

function ToggleStrike(){
    $("textarea").css("text-decoration", $("textarea").css("text-decoration") == "line-through" ? "none" : "line-through");
}

function SetLeft(){
    $("textarea").css("text-align", "left");
}

function SetCenter(){    
    $("textarea").css("text-align", "center");
}

function SetRight(){
    $("textarea").css("text-align", "right");
}