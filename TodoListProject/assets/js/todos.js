// Check off Specific Items by Clicking
$("ul").on("click", "li", (function(){
    // toggle items from gray and struck-through to black and not struck-through
    $(this).toggleClass("completed");
}));

$("ul").on("click", "span", (function(event){
    // stop Event Bubbling
    event.stopPropagation();
    // click on X to delete item
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
}));

$("input[type='text']").keypress(function(event){
    if (event.which===13){
        // recording todo text from input box
        var todoText = $(this).val();
        // emptying input box
        $(this).val("");;
        // create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});
