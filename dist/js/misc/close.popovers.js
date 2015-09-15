(function($){
  $(function(){
    $('[data-toggle="popover"]').popover();

    $('[data-toggle="popover"]').on('shown.bs.popover', function(event){
      var $popover = $('.popover.in');

      // select pickers in popovers
      var $select = $popover.find('.selectpicker-popover');
      if( $select.length > 0 ){
        $select.each(function(){
          $(this).selectpicker();
        });
      }

      //var popoverId = '#' + $(e.target).attr('aria-describedby');
      //var $thisPopover = $(popoverId);
      //
      //$thisPopover.find('.close').on('click', function(){
      //  $thisPopover.popover('hide');
      //});
    });

    $('body').on('click', function (e) {
      //only buttons
      if ($(e.target).data('toggle') !== 'popover'
          && $(e.target).parents('.popover.in').length === 0) {
        $('[data-toggle="popover"]').popover('hide');
      } else if($(e.target).hasClass('close') && $(e.target).parents('.popover.in').length > 0){
        $('[data-toggle="popover"]').popover('hide');
      }
      //buttons and icons within buttons
      /*
       if ($(e.target).data('toggle') !== 'popover'
       && $(e.target).parents('[data-toggle="popover"]').length === 0
       && $(e.target).parents('.popover.in').length === 0) {
       $('[data-toggle="popover"]').popover('hide');
       }
       */
    });

    var $currentPopover = null;
    $(document).on('shown.bs.popover', function (ev) {
      var $target = $(ev.target);
      if ($currentPopover && ($currentPopover.get(0) != $target.get(0))) {
        $currentPopover.popover('hide');
      }
      $currentPopover = $target;
    });

    $(document).on('hidden.bs.popover', function (ev) {
      var $target = $(ev.target);
      if ($currentPopover && ($currentPopover.get(0) == $target.get(0))) {
        $currentPopover = null;
      }
    });
  });
})(jQuery);