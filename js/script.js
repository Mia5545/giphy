// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
   var keyword= $("#search-term").val();
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q="+ keyword +"&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
        var gif = response.data[0].images.original.url;
        console.log(gif);
        response.data.forEach(function(picture){
           $(".gallery").html("<img src='" + picture.images.original.url + "'>");
        });
  
      }
    });


