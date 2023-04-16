function login(){
    var answer = document.getElementById("answer").value;
    console.log(answer);
    if ( answer == "blue"){
        alert ("Login successfully");
        window.location = "/main.html"; // Redirecting to other page.
        return false;
    }
}