// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	event.preventDefault();
	const height = document.getElementById("input_height").value;
	const width = document.getElementById("input_width").value;
	let table = document.getElementById("pixel_canvas");
	const delELeCell = document.getElementsByClassName("cell");
	//console.log(delELeCell.length);
	let k = delELeCell.length - 1;
	while(k >= 0){
		const parent = delELeCell[k].parentNode;
		parent.removeChild(delELeCell[k]);
		k--;
	}

	const delRow = document.getElementsByClassName("row");
	k = delRow.length - 1;
	while(k >= 0){
		const parent = delRow[k].parentNode;
		parent.removeChild(delRow[k]);
		k--;
	}

	for(let i = 0; i < height; i++){
		const row = document.createElement("tr");
		row.setAttribute("id", `row_${i}`);
		row.setAttribute("class", "row");
		table.appendChild(row);
		//const findRow = document.getElementById(`row_${}`)
		for(let j = 0; j < width; j++){
			const column = document.createElement(`td`);
			column.setAttribute("id", `cell_${i}_${j}`);
			column.setAttribute("class", "cell");
			row.appendChild(column);
		}
	}
	const buttonLen = document.getElementsByTagName("button");
	if(buttonLen.length === 0){
		const button = document.createElement("button");
		const text = document.createTextNode("Reset");
		button.appendChild(text);
		document.getElementsByTagName("body")[0].appendChild(button);
	}
}

document.getElementById("sizePicker").addEventListener("submit", makeGrid);

const table = document.getElementById("pixel_canvas");
table.addEventListener("click", function(event){
	const target_cell = event.target;
	const color = document.getElementById("colorPicker").value;
	//console.log(color);
	if(target_cell.tagName.localeCompare("TD") === 0 && target_cell.style.backgroundColor.localeCompare("") === 0){
		target_cell.style.backgroundColor = color;
	}
	else if(target_cell.tagName.localeCompare("TD") === 0){
		target_cell.style.backgroundColor = "";
	}
});

const all = document.getElementsByTagName("body")[0];
all.addEventListener("click", function(event){
	const button = event.target;
	if(button.tagName.localeCompare("BUTTON") === 0){
		const cellAll = document.getElementsByTagName("td");
		for(let m = 0; m < cellAll.length; m++){
			cellAll[m].style.backgroundColor = "";
		}
	}
});

