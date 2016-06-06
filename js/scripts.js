$(document).ready(function(){
  $("form#questions").submit(function(event)  {
    event.preventDefault();
    var q1 = $("input#q1").val();
    var q2 = $("input#q2").val();
    var q3 = $("input#q3").val();
    var array = [q1, q2, q3];
    var newArray = [array[1], array[2], array[0]];

    $("#result").text(newArray);

    // return array;


 //    $("#array").text();
 //
 //    var newArray = array.pop();
 //
 //    var newestArray = newArray.shift(q3);
 //
 //    $show(array)
 //
 //    $("#result3").text(q3)
 //
 //    $("#final").show();
 //
 //
 //    var result = $("q1", "q2", "q3") {
 //    return ("q1", "q2", "q3")
 //
 //    $("#array").text(result)
 // };
 //    var array = questions.concat("#q1", "#q2", "q3");
 //
 //      return array;
 //    $("#final").text(result)
 //    $("#array").text(result)
 //
 //

 });

});
