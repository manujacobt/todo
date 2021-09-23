
var j=0;
var f1=0;
function ajax(){
  var promise = new Promise(function(resolve,reject){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
        f1=1;
        var response = JSON.parse(this.responseText);
        var output ="";
       
        
        for(var i=0;i<response.length;i++){
          if(response[i].completed==false){
            output += "<input type=checkbox id=cb>   "+ response[i].title +"</br></br>";
          
          }
          
         
          if(response[i].completed==true){
            output += "<input type=checkbox checked disabled id=cb>   "+ response[i].title +"</br></br>";
            j++;
            console.log(j);
            
          }
                 
        }
       
        document.getElementById("demo").innerHTML=output;
        console.log(Array.isArray(output));
        
      }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
  });
  if (f1==1){
    resolve();
  }
  else{
    reject("server not ready");
  }
}

    var total_checked=0;
    vark=0;

        
     function vald(){
     
      total_checked =  $("input[type='checkbox']:checked").length;
      k=total_checked-90;
      if(k==5){        
               alert("congradulation : Five of the check boxes selected");                
                console.log(k)
            }
           
          }
                    
                     promise
                     .then(vald)
                     .catch(function(s){
                        console.log(s);
                     })
                    
       
                   
                
                  
      

      
      
        
        
   
    
    
      