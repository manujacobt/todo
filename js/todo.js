
var j=0;
function ajax(){

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
    vark=0;

        
     function vald(){
      return new Promise(function(resolve,reject){
      total_checked =  $("input[type='checkbox']:checked").length;
      k=total_checked-j;
      if(k==5){
                resolve(alert("congradulation :five of the check boxes selected"));
                console.log(k)
            }
            else{
                         reject("five of check box not selected");
                      }

                    });
                     promise
                     .then(function(s){
                        console.log(s);
                     })
                    }
       
      
      
      

      
      
        
        
   
    
    
      