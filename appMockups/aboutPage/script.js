$(document).ready(function(){
//     var js = "alert('B:' + this.id); return false;";
//     // create a function from the "js" string
//     var newclick = new Function(js);

//     // clears onclick then sets click using jQuery
//     // $("#deviceID1").attr('onclick', '').click(newclick);
   // $("#timey").click(function() {
   //      $("#deviceID1").html("change");       
   //          alert("Hello world!");
   //      });
  
    $('#timey').click(function(){
        var n = $('#deviceID1').length + 1;
        var box_html = $('<span class="text-box"><label for="box' + n + '">Box <span class="box-number">' + n + '</span></label> <input type="text" name="boxes[]" value="" id="box' + n + '" /> <a href="#" class="remove-box">Remove</a></p>');
        box_html.hide();
        $('.my-form p.text-box:last').after(box_html);
        box_html.fadeIn('slow');
        return false;
    });
});