let user=document.getElementById("user")
let pwd=document.getElementById("pwd")

login(sub);
 function login(callback){    
   
    if((user.value.trim()!="")&&(user.value!="admin")){
      alert("check username");
     
    }
    
    
    else if(user.value=="admin") {
      
      callback();
  }
  else{
    return false;
  }
      
  }
  
  function sub(){
    console.log();
    if((pwd.value.trim()!="")&&(pwd.value!="12345")){
      alert("check  pwd");
      return false;
    }
    else
     if (pwd.value=="12345"){
     return true;
    }
    else{
      return false;
    }
    
  }



 




