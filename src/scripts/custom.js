$(document).ready(function() {
  console.log('RWH 30!');

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



});
