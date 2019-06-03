function wish() {
   document.write("<center><font size=+3 style='color: green;'>");
        var day = new Date();
        var hr = day.getHours();
        if (hr >= 0 && hr < 12) {
            document.write("Good Morning!");
        }
        } else if (hr >= 12 && hr < 17) {
            document.write("Good Afternoon!");
        } else {
            document.write("Good Evening!");
        }
        document.write("</font></center>");
}
function myFunction() {
  var x = document.getElementById("event_3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
$(document).ready(function(){
  $(".hide1").click(function(){
    $(".event_2").hide();
  });
  
});
