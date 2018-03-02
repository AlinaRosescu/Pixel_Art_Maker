//function that creates a new grid from the height and width values introduced by the user
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

//deletes the grid, values inputed by user and hides the reset button
function deleteGrid() {
	$("#height").val("");
	$("#width").val("");
	$("tr").remove();
	hideResetBtn();	
}

//function that takes the value of color input and is used by the user to draw the grid cells
function draw() {
	$("table").on("mousedown", "td", function() {
		var color = $("#color").val();	
		$(this).css("background-color", color);
	});
}

//sets the cells background color back to white
function resetGrid() {
	$("td").css("background-color", "#fff");
}

//hides or shows the hreset button by toggling
function hideResetBtn() {
	$("#reset").toggleClass("resetBtn");
}

//on document ready and on user click we call different functions
$(function() {
	$("#submit").click(makeGrid);
	$("#delete").click(deleteGrid);	
	$("#reset").click(resetGrid);
})


	

	

