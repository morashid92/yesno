 $(function(){

$.ajax({
    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho",
    async: true,
        headers: { 
        Accept : "image/jpg",
        "Content-Type": "application/json"
    },
    type: 'GET',
    success: function(response) {
    $("#giphy").attr("src", response.data.image_url);
        console.log(response.data.image_url);
     },
    error: function(){
      alert("Cannot get data");
    }
}).done(function(data){
  
});




});

