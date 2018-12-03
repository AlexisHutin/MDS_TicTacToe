var player1 = "X";
var player2 = "O";
var player1Win = "XXX";
var player2Win = "OOO";
var player1NearlyWin = "XX";


function play(elem){
	var value = elem.innerHTML;
	if(value == player1 || value == player2){
		return;
	}
	else{
		elem.innerHTML = player1;
	}
	var win = checkGrid();
	if(!win){
		botPlay();
	}
}

function botPlay(){
	var cases = document.getElementsByClassName("case");
	for(var i = 0; i < cases.length; i++){
		var elem = cases[i];
		var value = elem.innerHTML;
		if(value == player1 || value == player2){
			//zerzer !!
		}
		else{
			if(debutLine(cases)){
				elem.innerHTML = player2;
				break;
			}
			else if(milieuLine(cases)){

			}
			else if(finLine(cases)){

			}
//-----------------------
			else if(debutColumn(cases)){

			}
			else if (milieuColumn(cases)){

			}
			else if (finColumn(cases)){
				
			}
//-----------------------------
			else if (debutDiag(cases)){
				
			}
			else if (milieuDiag(cases)){
				
			}
			else if (finDiag(cases)){
				
			}
//---------------------------
			else{
				elem.innerHTML = player2;
				break;
			}
		}
	}
	checkGrid();
}

/*---------------FONCTIONS BOT---------------------*/


/*------------DEBUT--------------*/
function debutLine(cases){
	var tab = [];
	for(var i = 0; i < cases.length; i+=2){
		var c1 = cases[i].innerHTML;
		var c2 = cases[i + 1].innerHTML;
		var line = c1 + c2;

		if (line == player1NearlyWin){
			tab[] = true;
			tab[] = i+2;
		}
	}
	tab[] = false;
	return tab[];
}

function debutColumn(cases){
	var tab = [];
	for(var i = 0; i < cases.length/3; i++){
		var c1 = cases[i].innerHTML;
		var c2 = cases[i + 3].innerHTML;
		var column = c1 + c2;

		if (column == player1NearlyWin){
			tab[] = true;
			tab[] = i+6;
		}
	}
	tab[] = false;
	return tab[];
}

function debutDiag(cases){
	var tab = [];
	for(var i = 0; i < 3; i+=2){
		var c1 = cases[i].innerHTML;
		var c2 = cases[4].innerHTML;
		var diag = c1 + c2;

		if (diag == player1NearlyWin){
			if(i == 0){
				tab[] = true;
				tab[] = 8;
			}
			else{
				tab[] = true;
				tab[] = 6;
			}
		}
	tab[] = false;
	return tab[];
	}
}








/*-------MILIEU---------*/
function milieuLine(cases){
	var tab = [];
	for(var i = 0; i < cases.length; i+=2){
		var c1 = cases[i].innerHTML;
		var c3 = cases[i + 2].innerHTML;
		var line = c1 + c3;

		if (line == player1NearlyWin){
			tab[] = true;
			tab[] = i + 1;
		}
	}
	tab[] = false;
	return tab[];
}

function milieuColumn(cases){
	var tab = [];
	for(var i = 0; i < cases.length/3; i++){
		var c1 = cases[i].innerHTML;
		var c3 = cases[i + 6].innerHTML;
		var column = c1 + c3;

		if (column == player1NearlyWin){
			tab[] = true;
			tab[] = i+3;
		}
	}
	tab[] = false;
	return tab[];
}

function milieuDiag(cases){
	for(var i = 0; i < 3; i+=2){
		var c1 = cases[i].innerHTML;
		var c3;
		if(i == 0){
			c3 = cases[8].innerHTML;
		}
		else{
			c3 = cases[6].innerHTML;
		}

		var diag = c1 + c3;

		if (column == player1NearlyWin){
			tab[] = true;
			tab[] = 4;
		}
	}
	tab[] = false;
	return tab[];
}









/*----------FIN---------*/
function finLine(cases){
	var tab = [];
	for(var i = 0; i < cases.length; i+=2){
		var c2 = cases[i + 1].innerHTML;
		var c3 = cases[i + 2].innerHTML;
		var line = c2 + c3;

		if (line == player1NearlyWin){
			tab[] = true;
			tab[] = i;
		}
	}
	tab[] = false;
	return tab[];
}

function finColumn(cases){
	var tab = [];
	for(var i = 0; i < cases.length/3; i++){
		var c2 = cases[i + 3].innerHTML;
		var c3 = cases[i + 6].innerHTML;
		var column = c2 + c3;

		if (column == player1NearlyWin){
			tab[] = true;
			tab[] = i;
		}
	}
	tab[] = false;
	return tab[];
}

function finDiag(cases){
	for(var i = 0; i < 3; i+=2){
		var c2 = cases[4].innerHTML;
		var c3;
		if(i == 0){
			c3 = cases[8].innerHTML;
		}
		else{
			c3 = cases[6].innerHTML;
		}

		var diag =c2 + c3;

		if (diag == player1NearlyWin){
			tab[] = true;
			tab[] = i;
		}
	}
	tab[] = false;
	return tab[];
}









/*----------------FONCTIONS WIN-----------------------*/

function isLineWinning(cases){
	for(var i = 0; i < cases.length; i+=3){
		var c1 = cases[i].innerHTML;
		var c2 = cases[i + 1].innerHTML;
		var c3 = cases[i + 2].innerHTML;
		var line = c1 + c2 + c3;

		if (line == player1Win || line == player2Win){
			return true;
		}
	}
	return false;
}

function isColumnWinning(cases){
	for(var i = 0; i < cases.length/3; i++){
		var c1 = cases[i].innerHTML;
		var c2 = cases[i + 3].innerHTML;
		var c3 = cases[i + 6].innerHTML;
		var column = c1 + c2 + c3;

		if (column == player1Win || column == player2Win){
			return true;
		}
	}
	return false;
}

function isDiagWinning(cases){

	for(var i = 0; i < 3; i+=2){
		var c1 = cases[i].innerHTML;
		var c2 = cases[4].innerHTML;
		var c3;
		if(i == 0){
			c3 = cases[8].innerHTML;
		}
		else{
			c3 = cases[6].innerHTML;
		}

		var diag = c1 + c2 + c3;

		if (diag == player1Win || diag == player2Win){
			return true;
		}
	}
	return false;
}

function checkGrid(){

	var cases = document.getElementsByClassName("case");
	if(isLineWinning(cases) || isColumnWinning(cases) || isDiagWinning(cases)){
		alert("Gagner");
		return true;
	}
	else{
		return false;
	}

}
