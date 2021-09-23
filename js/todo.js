
varj=0;
function ajax(){
        j=0;    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){     
      if(this.readyState==4&&this.status==200){        
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
}
var total_checked=0;
var k=0;
var ck=0;
     function vald(){         
     var promise = new Promise(function(resolve,reject){
      total_checked =  $("input[type='checkbox']:checked").length;
      k=total_checked-j;
      console.log(k);
           if(k===5){
               resolve("Congrats. 5 Tasks have been Successfully Completed");
           }
               else{
                   reject("5 check boxes not selected");
               }
           });
       promise
       .then(function(s){
           alert(s);
       })
       .catch(function(e){
           console.log(e);
       })                  
      }  

      
      
        
        
   
    
    
      