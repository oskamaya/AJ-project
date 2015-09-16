(function($){
  $(function(){
    $('#btn-add-info').on('click', function(event){
      event.preventDefault();
      if( $(this).hasClass('addInfo') ){
        $('div#user-more-info').show('fast');
        $(this).html('<i class="fa fa-minus-circle"></i> Ocultar');
      } else {
        $('div#user-more-info').hide('fast');
        $(this).html('<i class="fa fa-plus-circle"></i> Agregar información');
      }
      $(this).toggleClass('addInfo removeInfo');
    });
  });
})(jQuery);