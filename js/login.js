$(function() {

    if( $(".login".lenght) ) {
        let request = new XMLHttpRequest;
        request.onload = function() {
            let user = JSON.parse(this.response);  
         
            $(".login").on("click", function() {
                if( $("#inputEmail").val() == user.email && $("#inputPassword").val() == user.password) {
                    window.location.replace("dashboard.html");
                } else {
                    alert("Uppgifterna stämmer inte");
                    return false;
                }
            });
        }
        request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
        request.send();
    }
});