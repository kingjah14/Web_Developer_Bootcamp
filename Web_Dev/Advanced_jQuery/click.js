$("button").on("click", function() {
    $("div").fadeIn(1000, function() {
        $(this).remove();
    });
});

