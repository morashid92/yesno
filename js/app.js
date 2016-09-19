 $(function(){

$('#one').on("click", function() {
      $( "#sec-one" ).toggle( "slow", function() {
    // Animation complete.
  });
});

$('#two').on("click", function() {
      $( "#sec-two" ).toggle( "slow", function() {
    // Animation complete.
  });
});

$('#three').on("click", function() {
      $( "#sec-three" ).toggle( "slow", function() {
    // Animation complete.
  });
});
// $('#super-mario').on("click", function() {
     
// });



$.ajax({
    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho",
    type: 'GET',
    async: true,
    headers: { 
        Accept : "image/jpg",
        "Content-Type": "application/json"
    },
    success: function(response) {
    $("#giphy").attr("src", response.data.image_url);
        console.log(response.data.image_url);
        
        //   $.ajax({
        //     url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho",
        //     type: 'GET',
        //     async: true,
        //     headers: { 
        //         Accept : "image/jpg",
        //         "Content-Type": "application/json"
        //     },
        //     success: function(response) {
        //     $("#giphy").attr("src", response.data.image_url);
        //         console.log(response.data.image_url);
        //     },
        //     error: function(){
        //       alert("Cannot get search data");
        //     }
        // });
    },
    error: function(){
      alert("Cannot get data");
    }
});

});


