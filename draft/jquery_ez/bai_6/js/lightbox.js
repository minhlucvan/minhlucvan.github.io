function lightBox(sel ,options) {
    var selector = sel;
    
    function create(img) {
        var src = $(img).attr("src");
        $(".frog .image").attr("src", src);
    }
    
    function open() {
        $(".frog").fadeIn();
    }

    function close() {
        $(".frog").fadeOut();
    }

    $("body").on("click", selector, function () {
        create(this);
        open();
    });

    $(".close-frog").click(function () {
        close();
    });

    $(".frog .panel-body").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
    });

    $(".frog").click(function () {
        close();
    })
    return {
        open: open,
        close: close
    }
}