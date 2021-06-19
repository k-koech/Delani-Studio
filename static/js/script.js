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



// $(document).ready(function(){
//     $( ".service-img" ).click(function() 
//     {
//         var closestClass = $(this).closest(".service-img");
//         closestClass.next(".service-content").show();
//         // $( ".service-content" ).toggle();
//         // $( ".service-img" ).toggle();
      
//     });
    
//     });