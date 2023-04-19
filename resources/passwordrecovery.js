function login(){
    var answer = document.getElementById("answer").value;
    
    fetch('/forgotpassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            answer: answer
        })
    }).then((response) => {
        return response.json();
    }
    ).then((data) => {
        if(data.success){
            alert("Your password is: " + data.password);
        }else{
            alert("Incorrect answer");
        }
    }
    );
}