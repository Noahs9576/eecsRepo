function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "admin"){
        alert ("Login successfully");
        window.location = "/main.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("Incorrect username or password");
    }
}