$(document).ready(function() {

    var rand = Math.random()%4;
    var style = '<link rel="stylesheet" type="text/css" href="css/style-'+ rand +'.css"/>';
    $('head').append(style);

    $("#page-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigationText : false,
        autoPlay: true
    });

    $("#clients-slider").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 6,
        itemsDesktop : [1199,6],
        itemsDesktopSmall : [979,4],
        itemsTablet: 	[768,3],
        itemsMobile: [479,1]

    });

    $("#client-feed").owlCarousel({
       autoPlay: 5000,
        navigation: false,
        singleItem: true
    });
    var clientFeed = $("#client-feed").data("owlCarousel");

    var clientSlider = $("#clients-slider").data('owlCarousel');
    $('.client-slider-next').click(function () {
        clientSlider.next();
    });

    $('.client-slider-prev').click(function () {
        clientSlider.prev();
    });

    var aboutSlider = new FloatGallery("#about-slider");
    var chartDrawed = false;
    $(window).scroll(function() {
        var hT = $('#info').offset().top,
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT-wH)){
            if(!chartDrawed){
                $(".chart.half-pie").each(function () {
                    fixChart(this);
                });
                chartDrawed = true;
            }
        }
    });

    var searchInput = $("#search-inp");
    searchInput.focus(function () {
        console.log("cc");
    })
});

FloatGallery = function(selector){
    var container = $(selector);
    var left = null;
    var center = null;
    var right = null;

    var isMouseDown = false;
    var mousePosX = 0;
    var mouseMoved = 0;

    function getItems() {
        left = container.find(".left");
        center = container.find(".center");
        right = container.find(".right");
    }
    function beforeMove() {
        container.find('.ex-active').removeClass("ex-active");
    }
    this.next = function () {
        getItems();
        beforeMove();
        left.removeClass("left");
        left.addClass("center active");


        center.removeClass("center active");
        center.addClass("right");

        right.removeClass("right");
        right.addClass("left");

        center.addClass("ex-active");
    }

    this.prev = function () {
        getItems();
        beforeMove();
        left.removeClass("left");
        left.addClass("right");


        center.removeClass("center active");
        center.addClass("left");

        right.removeClass("right");
        right.addClass("center active");

        center.addClass("ex-active");
    }

    var _this = this;
    $("body").on('click', selector +" .left, .gallery-prev", function () {
      _this.next();
    });

    $("body").on('click', selector +" .right, .gallery-next", function () {
        _this.prev();
    });

    $(selector + ' img').on('dragstart', function(event) { event.preventDefault(); });

    container
        .mousedown(function(event) {
            isMouseDown = false;
            mousePosX = event.clientX;
            mouseMoved = 0;
        })
        .mousemove(function(event) {
            isMouseDown = true;
            mouseMoved = event.clientX - mousePosX;
        })
        .mouseup(function() {
            isMouseDown = false;
            if (mouseMoved > 30) {
                _this.next();
            } else if(mouseMoved < -30){
                _this.prev();
            }

        });
}

function fixChart(selector) {
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-180) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    function describeArc(x, y, radius, startAngle, endAngle){

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);

        var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y
        ].join(" ");

        return d;
    }

    var container = $(selector);
    var valuePie = container.find(".value-pie");
    var text = container.find("text");

    var value =  parseInt(container.attr("data-value"));

    var duaration = value*24;
    var start = null;
    var oldVal = -1;

    text.text(value);

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var currentVal = progress*value/duaration;
        if(currentVal > value) currentVal = value;
        oldVal = currentVal;
        var angle = currentVal*180/100;
        var d = describeArc(62, 60, 50, -90, angle);

        valuePie.attr("d", d);
        text.text(Math.round(currentVal));

        if (currentVal < value) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);

}
