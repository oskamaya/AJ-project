
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

  // Construct popover
  $('[rel="savePop"]').popover({
    html: true,
    container: 'body',
    content: function() {
      return $('.savePop .popover-content').html();
    },
    title: function() {
      return $('.savePop .popover-title').html();
    }
  });

  // Construct popover
  $('[rel="share-popover"]').popover({
    html: true,
    container: 'body',
    content: function() {
      return $('.share-popover .popover-content').html();
    },
    title: function() {
      return $('.share-popover .popover-title').html();
    }
  });

  // Construct popover for font-size
  $('[rel="sizeFont"]').popover({
      html: true,
      container: 'body',
      content : '<div class="text-center"><a class="btn btn-primary" href="#" id="incfont"><i class="fa fa-plus"></i></a>' +
      '<a class="btn btn-primary" href="#" id="decfont"><i class="fa fa-minus"></i></a></div>'
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
};

// MEGADROP FUNCTIONS

$(document).on('click', 'li.yamm-fw > ul.dropdown-menu', function(e) {
  e.stopPropagation()
});

// NAVIGATION FOR TABLET AND MOBILE DEVICES

+function ($ ) {
  // 'use strict'
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
  });
  $(".menu-link").click(function(){
    $("#menu").toggleClass("active");
    $(".side-collapse-container").toggleClass("active");
  });

}(jQuery);

// FUNCTION FOR PRINT ARTICLES

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}