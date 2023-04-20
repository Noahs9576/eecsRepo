$( document ).ready(function() {
    fetch("/getUserName", {
        method: "GET",
        headers: {
            "Content-Type": "plain/text"
        }
    }).then(function(response){
                return response.text();
    }).then(function(data){
                $('.user-name').text(data);
    });

    fetch("/getDoc", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response){
        return response.json();
    }).then(function(data){
        var docContainer = $('.doc-container')

        for (var key in data) {

            let actionContainer = $('<div/>', {
                class : "action-container"
            });
            let docIcon = $('<i/>', {
                class : "action-icon fa-solid fa-book",     
            });
            docIcon.on('click', function(e){           
                window.location = "/editor.html?doc=" + e.target.parentElement.children[1].innerText; 
            });
            let docName = $('<div/>', {
                class : "action-text",
                text : key,
            });
            actionContainer.append(docIcon);
            actionContainer.append(docName);
            docContainer.append(actionContainer);
        }
    });
})

function NewDoc(){
    // Create a new document
    window.location = "/editor.html";
}

function Logout(){
    window.location = "/";
}
