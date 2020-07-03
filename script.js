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

function clipboard() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

//document.getElementById("myRange").oninput;
    
