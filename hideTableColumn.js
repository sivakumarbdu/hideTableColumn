/*!
 * 
 * 
 * Date: 2016-04-13
 * 
 *
 */

$(document).ready(function() {
	$("div#productColumnId ul li input").on("change", function(event) {
		event.preventDefault();

		var dataId = []
		$("div#productColumnId ul li input:checked").each(function(index) {
			name = $(this).attr("id");
			dataId.push(name);
		});
		$("#ajax-box-inner").text(dataId);
		/*var pathVal = "${pageContext.request.contextPath}";
		$.ajax({
			url : pathVal + '/productoPantalla.do?metodo=saveTableConfigList',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			data : {
				order : JSON.stringify(dataId),
				tipo_objecto : 1
			}
		});*/

		column_id = $(this).attr("id")
		if ($(this).prop('checked')) {
			$('.' + column_id).show();
		} else {
			$('.' + column_id).hide();
		}
	})
});