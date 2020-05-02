$(document).ready(function() {
    $("form#purchase").submit(function(event) {
      event.preventDefault();
      var length = parseInt($("#length").val());
      var type = $("#type").val();
      var quantity = $("input:radio[name=quantity]:checked").val();
      var delivery = $("#delivery").val();
      var color = $("#color").val();
      $("#lengthOrder").text(length);
      $("#typeOrder").text(type);
      $("#quantityOrder").text(quantity);
      $("#deliveryOrder").text(delivery);
      $("#colorOrder").text(color);
      $("#output").show();
    });
    $("p#clickable").click(function() {
        $("#order").show();
      });
  });