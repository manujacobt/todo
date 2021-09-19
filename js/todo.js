function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var output =[];
       
        
        for(var i=0;i<response.length;i++){
          if(response[i].completed==false){
          output[i] = "<input type=checkbox id=cb >   "+ response[i].title +"</br></br>";
          }
          
         
          if(response[i].completed==true){
            output[i] = "<input type=checkbox id=cb checked disabled>   "+ response[i].title +"</br></br>";
            
          }
                 
        }
       
        document.getElementById("demo").innerHTML=output;
        console.log(Array.isArray(output));
        
      }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }



     var c=0;
    
   
     function vald(){          
       
       var cb=document.getElementById("cb");   

    //  if(cb.checked==true){
    //   c++;    
    //   console.log(c);     
      
    //          } 
    //          else if(cb.unchecked==true){
    //           if(cb.checked==true){
    //             c++;    
    //             console.log(c);     
                
    //                    } 
               
    //           console.log(c);
    //  c--;
             
    //          }
    //          else{
    //            console.log(c);
    //          }
    
    
          
    //         if (c==5){
    //           alert("5");
    //           return true;               
    //         }
        
    //       }     
            
    
  
      
  
                  
        
        
   
    
    
      