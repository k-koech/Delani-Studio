$(document).ready(function() 
{
    $( ".service1" ).click(function() 
    {
        $(".service1-content" ).toggle(); 
        $(".service1-img").toggle();
    });

    $( ".service2" ).click(function() 
    {
        $(".service2-content" ).toggle(); 
        $(".service2-img").toggle();
    });

    $( ".service3" ).click(function() 
    {
        $(".service3-content" ).toggle(); 
        $(".service3-img").toggle();
    });

});


// portfolio
$(document).ready(function(){
$( ".portfolio-img" ).mouseenter(function() 
{
    var closestCol = $(this).closest(".portfolio-img");
    closestCol.next(".caption").slideDown(100);
  })
  .mouseleave(function() {
    $(".caption" ).hide();
});
});



// form
function myForm()
{
       var name = document.getElementById("name").value;
       var email = document.getElementById("email").value;
       var message = document.getElementById("message").value;

    if (name.length<1 || email.length<1 || message.length<1) 
    {
        alert("All fields must be field!");
        return false;
    }
    else
    {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        document.getElementById("popUpText").innerHTML = name;
        $("#popUpModal").modal();
    }

}