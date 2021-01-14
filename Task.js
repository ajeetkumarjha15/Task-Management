
$(document).ready(function(){
  $("#btn1").click(function(){
     // var a = $("#addtask").val();
      //var txt1 = $("<li></li>" ).text(a); 
      //$("#todo").append(txt1);

      $("#todo").append("<li class='listitem'><input type='checkbox'>" + $("#addtask").val() +" " + "<input type='Text' class='text'>" +
       " " + "<input type='button' class='btn2' value='Edit'>" + " " + "<input type='button' class='btn3' value='Delete'>" +"</li>");
     
       $("#todo li").attr("id", function(i){
           return "todo" + (i+1);
       });

       $("#todo button").attr("id", function(j){
        return "todo" + (j+1);
    });

    $('input[type=checkbox]').change(function() {
       console.log($(this).parent(".listitem"))
        $("#completed").append($(this).parent(".listitem"));
           
    });  

    $('input[type=checkbox]').change(function() {
      console.log($(this).parent(".listitem"))
      var isChecked = $(this).is(":checked");
      if(!isChecked)
       $("#todo").append($(this).parent(".listitem"));                
  });

  $(".btn3").click(function(){
    $(this).parent().remove();
  })

  });
});

