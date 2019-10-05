function initDropdown() {
    var menus = $(".dropdown");
    var speed = 100;
    console.log(menus);

    function onSlideDown() {
        var dropdownMenu = $(this).find(".dropdown-menu");
        dropdownMenu.slideDown(speed);
    }
    function  onSlideUp() {
        console.log("out");
        $(this).find(".dropdown-menu").slideUp(speed);
    }

    function  listen() {
        menus.on("mouseover", onSlideDown);
        menus.on("mouseleave", onSlideUp);
    }

    listen();
}