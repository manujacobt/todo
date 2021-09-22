let user=document.getElementById("user")
let pwd=document.getElementById("pwd")
var flag=0;

function log(){
  
 function login(a,b,callback){    
   console.log(a);
   console.log(b);
   
    
    if(user.value==a) {
      
      callback(a,b);
      return false;
   }
   else{
     return false;
   }
      
  }
  
  function sub(c,d){
    console.log(c);
    console.log(d);
   
    
     if (pwd.value==d){
     flag=1;
    }
    else{
      return false;
    }
    
  }
  

  login("admin","12345",sub);
  
  if(flag==1){
    return true;
  }

  
  else if((user.value.trim()!="")&&(user.value!="admin")){
    alert("check username");
  return false;
  
}   

  else if((pwd.value.trim()!="")&&(pwd.value!="12345")){
    alert("check  pwd");
    return false;
  }
  else{
    return false;
  }

  
 
}



