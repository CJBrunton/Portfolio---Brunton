function setImageHotSpots() {
var img = $('#myImage')[0]; 
//or however you get a handle to the IMG
var height = img.clientHeight;
var width = height / 0.75; //calculate width using image ratio


//set image hotspot coords top left window
 var x =0.41 * width;
 var y =0.368 * height;
 var x1 =0.51 * width;
 var y1 =0.443 * height;
 
 
 var a =0.708 * width;
 var b = 0.368 * height;
 var a1 = 0.75 * width;
 var b1 = 0.443 * height;
 
 
 var c =0.552 * width;
 var d = 0.52 * height;
 var c1 = 0.598 * width;
 var d1 = 0.643 * height;
 

 var e =0.41 * width;
 var f = 0.52 * height;
 var e1 = 0.45 * width;
 var f1 = 0.6 * height;
 
 var g =0.708 * width;
 var h = 0.52 * height;
 var g1 = 0.75 * width;
 var h1 = 0.6 * height;
 
 //constructing a string of the coord variables
 var coords = x + "," + y + "," + x1 + "," + y1;
 var coords1 = a + "," + b + "," + a1 + "," + b1;
 var coords2 = c + "," + d + "," + c1 + "," + d1;
 var coords3 = e + "," + f + "," + e1 + "," + f1;
 var coords4 = g+ "," + h + "," + g1 + "," + h1;
 
 //set the coords of the imagemap
$('#window-1')[0].setAttribute("coords",coords);
$('#window-2')[0].setAttribute("coords",coords1);
$('#door-1')[0].setAttribute("coords",coords2);
$('#window-3')[0].setAttribute("coords",coords3);
$('#window-4')[0].setAttribute("coords",coords4);

 }

 
//Center Vertically

function getWindowHeight() {
	var windowHeight = 0;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	}
	else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}
function setContent() {
	if ($('#id')) {
		var windowHeight = getWindowHeight();
		if (windowHeight > 375) {
			var contentElement = $('#myImage')[0];
			var contentHeight = contentElement.offsetHeight;
			if (windowHeight - contentHeight > 0) {
				contentElement.style.position = 'relative';
				contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';
			}
			else {
				contentElement.style.position = 'static';
			}
		}
	}
}
window.onload = function() {
	setContent();
}
window.onresize = function() {
	setContent();
}

//Windows 

var window1 = 0;
var window2 = 0;
var window3 = 0;
var window4 = 0;
var door1 = 0;
var whatwindow = "";


function w1()
{
	if(window1 == 1)
	{
		window1 = 0;
		whatwindow = " Top left Off";
	}
	else
	{
		window1 = 1;
		whatwindow = " Top Left On";
	}
	
	load_new_image();
	addRowToTable(whatwindow);
}
function w2()
{
	if(window2 == 1)
	{
		window2 = 0;
		whatwindow = " Top Right Off";
	}
	else
	{
		window2 = 1;
	}
	whatwindow = " Top Right On";
	load_new_image();
	addRowToTable(whatwindow);
}

function w3()
{
	if(window3 == 1)
	{
		window3 = 0;
		whatwindow = " Bottom Left Off";
	}
	else
	{
		window3 = 1;
		whatwindow = " Bottom Left On";
	}
	load_new_image();
	addRowToTable(whatwindow);
}

function w4()
{
	if(window4 == 1)
	{
		window4 = 0;
		whatwindow = " Bottom Right Off";
	}
	else
	{
		window4 = 1;
		whatwindow = " Bottom Right On";
	}
	load_new_image();
	addRowToTable(whatwindow);
}

function d1()
{
allwindows = window1 + window2 + window3 + window4;
	if(allwindows == 1 || allwindows == 4)
	{
		window1=0;
		window2=0;
		window3=0;
		window4=0;
		whatwindow = " All Off";
	}
	else 
	{
		window1=1;
		window2=1;
		window3=1;
		window4=1;
		whatwindow = " All On";
	}
	load_new_image();
	addRowToTable(whatwindow);
}
 
function load_new_image()
{
	$('#crofthouse')[0].src='images/' + window1 + window2 + window3 + window4 + '.jpg';
	allwindows = window1 + window2 + window3 + window4; 
	
	if (allwindows == 0)
	{
		$('#crofthouse')[0].title=''
	}
}

function displayOptions() {

	$('#fm')[0].style.display ="block";
}

function showLog() {
	$('#logDiv')[0].style.display ="block";
	
	
	$('#logDiv').css('margin-right','1025px');
	$('#logDiv').css('margin-top','-118px');
	$('#logDiv').css('width','360px');
	$('#fm')[0].style.display ="none";
	$('#crofthouse').css('width','500px');
    $('#myImage').css('margin-right','1500px');
    $('#crofthouse').css('margin-top','-220px');
  
}

	function addRowToTable(window)
	{


      var currentTime = new Date();
	  
	  var thewindow = window;
	  var tbl = $('#tablelog')[0];
	  
	  var lastRow = tbl.rows.length; // creates variable lastrow sets value to be number of rows in table
	  // if there's no header row in the table, then iteration = lastRow
	  var iteration = lastRow - 1;// takes one value off last row to account for header
	  var row = tbl.insertRow(lastRow);// 
	  
	  // left cell
	  var cellLeft = row.insertCell(0);
	  var textNode = document.createTextNode(iteration + "| " + currentTime + thewindow  ); //creates textnode to store log information 
	  cellLeft.appendChild(textNode); //inserts textnode into table cell




		elm=$('#tableheader')[0]; 
	    elm.innerHTML='Window State: ' + iteration + ' Recorded State(s)'; //update the table header with the number of window states


	
	   
		//onmouseover="this.style.background='#0066CC ';
		//this.style.cursor='pointer';"
		//onmouseout="this.style.background='white';"
		//onclick="alert('bang')"
	}