function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username, password: password})
    }).then(function(response){
        return response.json();
    }).then(function(data){
        if(data.success){
            alert("Login successfully");
            window.location = "/main.html";
        }
        else{
            alert("Incorrect username or password");
        }
    });
}