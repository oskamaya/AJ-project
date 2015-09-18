// NAVIGATION FOR TABLET AND MOBILE DEVICES

(function($){
  'use strict';
  $(function(){
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
    });
    $(".menu-link").on('click', function(){
      $("#menu").toggleClass("active");
      $(".side-collapse-container").toggleClass("active");
    });
  });
})(jQuery);


/* HERE BEGINS EXTRA FUNCTIONS */

// Change order of image and summary

function orderTop() {
  if ( $(window).width() > 768) {
    $('.top-article .top').insertBefore('.top-article .bottom');
  } else {
    $('.top-article .bottom').insertBefore('.top-article .top');
  }

  // Change order in tablets and mobiles for Analisis jurisprudencial template

  if ( $(window).width() < 922) {
    $('#jurisprudential').insertBefore('#right-column');
  }
  else {
    $('#right-column').insertBefore('#jurisprudential');
  }
}

window.addEventListener('resize', orderTop, true);

$(document).ready(function() {

  var popovers = [
    'savePop',
    'sizeFont',
    'share-popover',
    'send-email-to-columnist',
    'save-search',
    'create-folder',
    'delete-folder',
    'organize-contents',
    'delete-contents',
    'edit-alert',
    'delete-alert',
    'delete-alerts'
  ];

  popovers.forEach(function(popover){
    $('[rel="' + popover + '"]').popover({
      html: true,
      container: 'body',
      content: function() {
        return $('.' + popover + ' .popover-content').html();
      },
      title: function() {
        return $('.' + popover + ' .popover-title').html();
      }
    });
  });


// INCREASE FONT SIZE ON ARTICLES

  $('#incfont').click(function(){
    curSize= parseInt($('.article-body p').css('font-size')) + 2;
    if(curSize<=20)
      $('.article-body p').css('font-size', curSize);
  });
  $('#decfont').click(function(){
    curSize= parseInt($('.article-body p').css('font-size')) - 2;
    if(curSize>=12)
      $('.article-body p').css('font-size', curSize);
  });

// Main article change position
  if ( $(window).width() > 768) {
    $('.top-article .top').insertBefore('.top-article .bottom');
  }
  else {
    $('.top-article .bottom').insertBefore('.top-article .top');
  }

// Change order in tablets and mobiles for Analisis jurisprudencial template

  if ( $(window).width() < 922) {
    $('#jurisprudential').insertBefore('#right-column');

  }
  else {
    $('#right-column').insertBefore('#jurisprudential');
  }

});

// Select tabs for profile page

function activeTab(tab){
  $('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

// MEGADROP FUNCTIONS

$(document).on('click', 'li.yamm-fw > ul.dropdown-menu', function(e) {
  e.stopPropagation()
});

// FUNCTION FOR PRINT ARTICLES

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}



$('#headersearchicon').click(function (e){
  e.preventDefault();

  if($(this).hasClass("clicked")){

    $('#hiddensearchform').stop().animate({height:0}, 200, function(){
      $(this).removeAttr('style');
      $('#hiddensearchform').hide();
    });

    $(this).removeClass("clicked")
  }
  else{
    $('#hiddenreadinglist').hide();
    $("#header #readinglist").removeClass("clicked");

    $('#hiddensearchform').show();
    var temph = $('#hiddensearchform').height();

    $('#hiddensearchform').height(0);
    $('#hiddensearchform').stop().animate({height:temph}, 200, function(){
      $(this).removeAttr('style');
      $(this).show();
    });

    $(this).addClass("clicked")
  }
});