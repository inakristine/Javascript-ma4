fetch("https://jsonplaceholder.typicode.com/todos")
  
    .then(function(response) {
    return response.json();
    })
  
    .then(function(myJson) {
   
    
        for(var i=0 ; i<myJson.length; i++){
       
            var mainContainer = document.createElement("div");
       
                var cStyling = mainContainer.style;
                cStyling.borderRadius = "6px";
                cStyling.padding = "20px";
                cStyling.margin = "20px"
                cStyling.width = "200px";
                cStyling.height = "200px";
                cStyling.float = "left";
       
                document.body.appendChild(mainContainer);
       
            var text1 = document.createElement("p");
       
                text1.style.paddingBottom =  "4px";
                text1.style.fontFamily = "sans-serif";
                text1.style.fontWeight = "600";
            
                text1.innerHTML ="User ID: " + myJson[i].userId + "<br>";
                mainContainer.appendChild(text1);
       
            var text2 = document.createElement("p");
                text2.innerHTML ="Id: " + myJson[i].id + "<br>";
                mainContainer.appendChild(text2);
   
            var text3 = document.createElement("p");
                text3.innerHTML ="Title: " + myJson[i].title + "<br>";
                mainContainer.appendChild(text3);
   
       
            var text4 = document.createElement("p");
                mainContainer.appendChild(text4);
   
                    if (myJson[i].completed==false){
                        text4.innerHTML = "Task is not completed"+"<br>";
                        cStyling.backgroundColor = "MistyRose ";
                        cStyling.border = "2px solid HotPink ";
                        text4.style.fontFamily = "sans-serif";
                        text4.style.fontWeight = "600";
                        text4.style.color = "HotPink";
                        text1.style.borderBottom =  "2px solid HotPink ";
           
                    }else{
                        text4.innerHTML = "Task is completed"+"<br>";
                        cStyling.backgroundColor = "LightCyan";
                        cStyling.border = "2px solid DarkTurquoise";
                        text4.style.fontFamily = "sans-serif";
                        text4.style.fontWeight = "600";
                        text4.style.color = "DarkTurquoise";
                        text1.style.borderBottom =  "2px solid DarkTurquoise ";
                    }
       
    }
    
  });


 