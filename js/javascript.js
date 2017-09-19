$(document).ready(function(){

  $("#add-item-button").click(function addItem(){
     var listItem= $("#formField").val();
      $("#alternateColor").append("<tr><td>"+listItem+"</td></tr>");
      $("#formContainer")[0].reset();
    });

    $('#formField').keypress(function (e) {
    if (e.which == 13) {
    $('#add-item-button').click();
    return false;
  }
});
});
