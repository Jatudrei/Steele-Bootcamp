// Check off Specific Items by Clicking
$("li").click(function(){
    // toggle items from gray and struck-through to black and not struck-through
    $(this).toggleClass("completed");
});

$("span").click(function(event){
    // stop Event Bubbling
    event.stopPropagation();
    // click on X to delete item
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
});
});

