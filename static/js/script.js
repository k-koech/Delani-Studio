$(document).ready(function(){
$( ".service-img" ).click(function() 
{
    var closestImg = $(this).closest(".service-img");
    closestImg.next(".service-content").show();
    // $( ".service-content" ).toggle();
    closestImg.hide();
   
});

$( ".service-content" ).click(function() 
{
    var closestContent = $(this).closest(".service-content");
    // var closestIm = $(this).closest(".service-img");

    closestIm.next(".service-img").show();
    closestContent.next(".service-content").hide();
   
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
        document.getElementsByClassName("popUpText").innerHTML = "name";
        $("#popUpModal").modal();
    }

}

// $(document).ready(function(){
//     $( ".service-img" ).click(function() 
//     {
//         var closestClass = $(this).closest(".service-img");
//         closestClass.next(".service-content").show();
//         // $( ".service-content" ).toggle();
//         // $( ".service-img" ).toggle();
      
//     });
    
//     });