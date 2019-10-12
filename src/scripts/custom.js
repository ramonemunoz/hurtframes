$(document).ready(function() {
  console.log('RWH 9!');

  $('.swatch-element input:radio').change(function() {
    console.log($(this));
    // remove selected from all
    $('option').each(function(){
      console.log($(this));
      $(this).removeAttr("selected");
    })
    var inputSelected = $(this).val();
    console.log(inputSelected);
    $('.selector-wrapper option[value="'+ inputSelected +'"]').attr("selected", "selected");


    $('option')
      .filter(function() { return $.trim( $(this).text() ) == inputSelected; })​​​​​​​​.attr('selected','selected');

  });

  for (i = 1; i < 38; i++) {
    $('#cf-images').append(
      "<div class='col-6 col-md-6 col-lg-3'><img class='mx-auto d-block img-fluid gallery-photos lozad' data-image='" +
        i +
        "' data-src ='https://d1m5g212b7abh8.cloudfront.net/PHOTO+GALLERY/preview/NLP-edits-" +
        i +
        ".jpg' /> <a href='https://d1m5g212b7abh8.cloudfront.net/PHOTO+GALLERY/download/NLP-edits-" +
        i +
        ".jpg' download> <img class='download-icon mx-auto d-block img-fluid' src='https://d1m5g212b7abh8.cloudfront.net/download-icon-white.png' /></a>  </div >"
    );
  }

});

$(window).on('load', function() {
  // weave your magic here.
  $('.photos').css('display', 'flex');
  $('.loading-container').hide();

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

});
