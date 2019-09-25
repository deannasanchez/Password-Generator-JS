var plength = document.getElementById("myRange").value;
//var defaultLength = plength.defaultvalue;
//var pickLength = plength.value;

var alphnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var newpassword = "";


function genpassword(){

    for(var i = 0; i <= plength; i++){
        newpassword = newpassword + alphnum.charAt(Math.floor(Math.random() * Math.floor(alphnum.length - 1)));
    }

    document.getElementById("password").value = newpassword;
}

//document.getElementById("myRange").oninput;
    
