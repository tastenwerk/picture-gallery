$(document).ready(function(){
  if( $('#main-slider img').length > 1 ){
    $('#main-slider').tinycarousel({ 
      interval: true,
      intervalTime: 5000
    });
  }
});