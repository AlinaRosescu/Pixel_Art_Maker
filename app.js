var getCanvas;
var valuesSet = false;

//function that creates a new grid from the height and width values introduced by the user
function makeGrid() {
    var table = $("table");
    var height = $("#height").val();
    var width = $("#width").val();

    checkValuesAreInserted(height, width);


    if (valuesSet === true) {
        if ($("tbody").children("tr").length > 0) {
            $("table").empty();
        }
        for (var row = 0; row < height; row++) {
            var tr = $("<tr>");

            for (var col = 0; col < width; col++) {
                $("<td></td>").appendTo(tr);
            }
            tr.appendTo(table);
        }
        showBtn();
    } else {
        $("#reset-btn, #preview-btn, #save-btn").removeClass("show").addClass("hide");
        $("table").empty();
    }

}


function checkValuesAreInserted(heightVal, widthVal) {
    $(".left p, .right p").removeClass("show").addClass("hide");
    if (heightVal == 0 && widthVal == 0) {
        $(".left p, .right p").removeClass("hide").addClass("show");
        valuesSet = false;
    } else if (heightVal == 0) {
        $(".left p").removeClass("hide").addClass("show");
        valuesSet = false;
    } else if (widthVal == 0) {
        $(".right p").removeClass("hide").addClass("show");
        valuesSet = false;
    } else {
        valuesSet = true;
    }
    return valuesSet;
}

//deletes the grid, values inputed by user and hides the reset, preview and save buttons
function deleteGrid() {
    $("#height").val("0");
    $("#width").val("0");
    $("#color").val("#000000");
    $("table").empty();
    $("#reset-btn, #preview-btn, #save-btn").removeClass("show").addClass("hide");
    $("div p").removeClass("show").addClass("hide");
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

//hides or shows the buttons by toggling their class
function showBtn() {
    $("#reset-btn, #preview-btn, #save-btn").removeClass("hide").addClass("show");
}

//creates a canvas with a preview of the drawn pixel art
function previewImg() {
    if ($("#preview").children("canvas").length > 0) {
        $("#preview").empty();

    html2canvas(document.querySelector("#canvas")).then(canvas => {
        $("#preview").append(canvas);
        getCanvas = canvas;
    });
}


//on document ready and on user click we call different functions
$(document).ready(function(){
    $("#submit").click(makeGrid);
    $("table").click(draw);

    $("#delete-btn").click(deleteGrid);
    $("#reset-btn").click(resetGrid);

    $("#preview-btn").click(previewImg);

    $("#save-btn").on('click', function () {
        var imgageData = getCanvas.toDataURL("image/jpg");
        var newData = imgageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
        $("#save-btn").attr("download", "pixel_art_image.jpg").attr("href", newData);
    });
});