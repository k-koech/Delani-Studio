$(document).ready(function(){
$( ".service-img" ).click(function() 
{
    var closestClass = $(this).closest(".service-img");
    closestClass.next(".service-content").toggle();
    // $( ".service-content" ).toggle();
    closestClass.hide();
   
});

$( ".service-content" ).click(function() 
{
    var closestClass = $(this).closest(".service-content");
    $(".service-img").show();
    closestClass.hide();
   
});


});


$( ".col" ).mouseenter(function() 
{
    $("h6").show();
  })
  .mouseleave(function() {
    $("h6" ).hide();
});

// $(document).ready(function(){
//     $( ".service-img" ).click(function() 
//     {
//         var closestClass = $(this).closest(".service-img");
//         closestClass.next(".service-content").show();
//         // $( ".service-content" ).toggle();
//         // $( ".service-img" ).toggle();
      
//     });
    
//     });