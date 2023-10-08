window.onload = pageLoad;
function pageLoad(){
   
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {


    var x = document.forms["myForm"]["password"][0];
    var y = document.forms["myForm"]["password"][1];
 	if(x.value!=y.value){
      alert("Password not match");
        document.getElementById('errormsg').innerHTML = "Password not match";
       
        return false;
    }

    alert("Register Complete");
   
}

