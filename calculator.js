window.onload = function() {
       
        var screen = document.getElementById("disp-result");
        
        var numVal = document.querySelectorAll(".num");
            
              var foo = numVal.length;
            
              for(var i = 0; i < foo; i++ ) {
                
                numVal[i].addEventListener("click",function() {
                          
                    num = this.value;
                             
                    output = screen.innerHTML +=num;
                          
                    var limit = output.length;
                 
                 
               
             },false);
                
            } 
        
            document.querySelector(".zero").addEventListener("click",function() {
                
                var numZero = this.value;
                
                if(screen.innerHTML === "") {
                    
                   output = screen.innerHTML = numZero;  
                }
                
                else if(screen.innerHTML === output) {
                    
                 output = screen.innerHTML +=numZero;
                    
                }
                  
            },false);
            
            document.querySelector(".dot").addEventListener("click",function() {
                
                var decimal = this.value;
                
                if(screen.innerHTML === "") {
                    
                 output = screen.innerHTML = screen.innerHTML.concat("0.");
                    
                 }
            
                else if(screen.innerHTML === output) {
                
                  screen.innerHTML = screen.innerHTML.concat(".");
                    
                }
                
            },false);
            
            
            document.querySelector("#equal").addEventListener("click",function() {
                
              if(screen.innerHTML === output) {
                  
                screen.innerHTML = eval(output);
                
                output = screen.innerHTML;
                
              }
                
              else {
                    screen.innerHTML = "";
              }
                  
            },false);
            
         document.querySelector("#ac").addEventListener("click",function() {
                
                screen.innerHTML = "";
                
            },false);
            
           
            
             var evalOperator = document.querySelectorAll(".operator");
            
              var len1 = evalOperator.length;
            
              for(var i = 0; i < len1; i++ ) {
                
                evalOperator[i].addEventListener("click",function() {
                 
                operator = this.value;
                 
                 if(screen.innerHTML === "") {
                    
                    screen.innerHTML = screen.innerHTML.concat("");
                    
                }
                
                else if(output) {
                
                    screen.innerHTML = output.concat(operator);
                    
                }
                   
            },false);
                  
              }   
        }
        
      