(function($){
	$.fn.jqTabs = function(){
		var container = $(this);

		var tabs = function(){
			this.container = container;

			function hideAll(){
				container.find(".active").removeClass("active");
			};

			function showTab(id){
				hideAll();
				container.find(".show-tab[href="+id+"], .tab"+ id).addClass("active");
			}

			function onShowTabClick(){
				var id = $(this).attr("href");
				showTab(id);
			}

			function listen(){
				container.on("click", ".show-tab", onShowTabClick);
			}

			this.show = function(id){
				showTab(id);
			};

			listen();
		};

		return new tabs();
	}
}(jQuery))