(function($){
    $.fn.jqCollpanse = function(){
        var collpanse = $(this);
        
        collpanse.find(".open-collpanse").click(function () {
            var id = $(this).attr("href");
            var panel = collpanse.find(id);
            panel.slideDown(200);
            collpanse.find(".panel.open").removeClass("open");
            panel.closest(".panel").addClass("open");
            collpanse.find(".panel-body").not(panel).slideUp(200);
        })
    };
}(jQuery))