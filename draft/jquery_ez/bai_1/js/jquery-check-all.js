/*
/* a plugin for jquery
/* check/uncheck all table rows
/* author: minhlv
*/
(function($){
	if(!$) throw "jQuery is not defined";
	var DEDAULT_OPTIONS = {
		checkall: false
	};

	$.fn.tableCheckAll = function(options){
		var CONFIG = $.extend(DEDAULT_OPTIONS, options);
		var table = $(this);
		var instance = function(){
			if(table.length <= 0) return;
			var _instance = this;

			function onSelectAllChange(e){
				if($(this).is(":checked")){
					_instance.selectAll();
				} else {
					_instance.unSelectAll();
				}
			}

			function onSelectRowChange(){
				if(_instance.isSelectAll()){
					table.find("input[name=select-all]").prop("checked", true);
				} else {
					table.find("input[name=select-all]").prop("checked", false);
				}
			}

			function init(){
				if(CONFIG.checkall){
					_instance.selectAll();
				}
			}

			function listen(){
				table.on("change", "input[name=select-all]", onSelectAllChange);
				table.on("change", "input[name=select]", onSelectRowChange);
			}

			function getRows(){
				return table.find("tbody>tr");
			}

			this.getSlectedRows = function(){
				return table.find("tbody>tr").filter(function(index){
					return $("input[name=select]:checked", this).length >= 1;
				});
			}

			function getUnSelectedRows(){
				return table.find("tbody>tr").filter(function(index){
					return $("input[name=select]:not(:checked)", this).length >= 1;
				});
			}
			this.isSelectAll = function(){
				return this.getSlectedRows().length == getRows().length; 
			}

			this.selectAll = function(){
				var rows = getUnSelectedRows();
				rows.find("input[name=select]").prop("checked", true);
			}

			this.unSelectAll = function(){
				var rows = this.getSlectedRows();
				rows.find("input[name=select]").prop("checked", false);
			}

			this.toggleAll = function(){
				if(this.isSelectAll()){
					this.unSelectAll();
				} else {
					this.selectAll();
				}
			}

			this.selectRow = function(n){
				this.getRows().eq(n).find("input[name=select]").prop("checked", true);
			}

			this.unSelectRow = function(n){
				this.getRows().eq(n).find("input[name=select]").prop("checked", false);
			}

			this.toggleRow = function(n){
				var row = this.getRows().eq(n);
				var checkbox = row.find("input[name=select]");
				if(checkbox.prop("checked")){
					checkbox.prop("checked", true);
				} else  {
					checkbox.prop("checked", true);
				}
			}
			init();
			listen();
		}
		return new instance(); 
	}
}(jQuery))