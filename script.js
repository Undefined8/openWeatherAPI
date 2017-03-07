$("#go").click(function(){
   $.getJSON("api.openweathermap.org/data/2.5/weather?q="+encodeURIComponent($("#input").val()),
   function(response){
        console.log(response);    
   });
});