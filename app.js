
function makeGrid() {	
	var height = $("#height").val();
	var width = $("#width").val();
	var table = $("table");	
	
	for (var row = 0; row < height; row++) {
		var tr = $("<tr>");
		
		for (var col = 0; col < width; col++) {
			$("<td></td>").appendTo(tr);
		}

		tr.appendTo(table);
	}
	hideResetBtn();	
}

function deleteGrid() {
	$("#height").val("");
	$("#width").val("");
	$("tr").remove();
	hideResetBtn();	
}

function draw() {
	$("table").on("mousedown", "td", function() {
		var color = $("#color").val();	
		$(this).css("background-color", color);
	});
}

function resetGrid() {
	$("td").css("background-color", "#fff");
}

function hideResetBtn() {
	$("#reset").toggleClass("resetBtn");
}


$(function() {
	$("#submit").click(makeGrid);
	$("#delete").click(deleteGrid);	
	$("#reset").click(resetGrid);
})


	

	

