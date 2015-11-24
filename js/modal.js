$.fn.modalBox = function( options, cb ){
  
  'use strict';

  options = options || {};
  
  $('#modal').remove();
  var $wrap = $('<div/>').attr('id','modal').addClass('modal-box-wrap');
  var $modalBox;
  var $scribbleWrapper = $('<div/>').addClass('scribbleWrapper').html( $('<div/>').addClass('closeModal').html('<i class="fa fa-times fa-2x"></i>'));

  $modalBox = $('<div/>').addClass('modalBox').html( $('#'+$(this).attr('data-modal-id')).addClass('modal-box-content').html() );
  // $('modalBox').niceScroll();
  $wrap.append( $('<div/>').addClass('modal-box-overlay').html('&nbsp;').append($scribbleWrapper).append($modalBox) );

  $('body').append($wrap);

  $wrap.on('click', function(e){  
     if( !$(e.target).closest('.modalBox').length || $(e.target).closest('.closeModal').length ){
      $wrap.fadeOut(500, function(){
        $wrap.remove();
        
        $('body').css('overflow', 'auto');
        // $(".modal-box-wrap").getNiceScroll().remove();
      });  
    }
  });

  $wrap.fadeIn(500, cb || function(){} );

};

console.log('HERE!')

$('body').on('click', '.gallery', function(){
  console.log('HERERERERRE');
})

$('body').on('click', '.open-modal', function(e){
    console.log('open modal');
  $(this).modalBox({}, function(){
    $('body').css('overflow', 'hidden');
    // $('.modalBox').niceScroll();
    


    // if( $('#modal #picture-slider').size() > 0 )
    //   $('#modal #picture-slider').tinycarousel({ 
    //     interval: true,
    //     intervalTime: 10000
    //   });
  });       
});