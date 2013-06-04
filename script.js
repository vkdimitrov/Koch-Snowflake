
/*
 * point object
 * @param {int} x coodrinates
 * @param {int} y coordinates
 * @returns {point}
 */
function Point(x, y)
{
	this.X = x;
	this.Y = y;
}
/*
 * vector obeject represents directed segment
 * @param {Point} pointFrom
 * @param {Point} pointTo
 * @returns {Vector}
 */
function Vector(pointFrom, pointTo)
{
	this.start	= pointFrom;
	this.end	= pointTo;
}

/*
 * draw_line(context, fromX, fromY, toX, toY) draw line between two points
 * @param	context canvas context
 * @param	{int}	fromX	begin X
 * @param	{int}	fromY	begin Y
 * @param	{int}	toX		destination X
 * @param	{int}	toY		destination Y
 */
function draw_line(context, fromX, fromY, toX, toY)
{
	context.beginPath();
	context.moveTo(fromX, fromY);
	context.lineTo(toX, toY);
	context.stroke();	
}

/*
 * draw_vector 
 * @param	{context} canvas context
 * @param	{Vector}  vector 
 */
function draw_vector(context, vector)
{
	context.beginPath();
	context.moveTo(vector.start.X, vector.start.Y);
	context.lineTo(vector.end.X, vector.end.Y);
	context.stroke();	
}

window.onload = function()
{
	var canvas=document.getElementById("kochCanvas");
	var ctx=canvas.getContext("2d");
	
	//get center point 
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
	var center	= new Point(canvas.width/2, canvas.height/2);
	
	//base side 
	var side	= 500;
	
	//init base
	var lines = new Array();
	
	//bottom line
	var tmpPoint	= new Point(center.X - side/2, center.Y + ((Math.sqrt(3)/2)*(1/3)*side));
	var tmpPoint2	= new Point(center.X + side/2, center.Y + ((Math.sqrt(3)/2)*(1/3)*side));
	var a = new Vector(tmpPoint, tmpPoint2);
	lines.push(a);
	
	//right side
	var tmpPoint3	= new Point(center.X, center.Y - ((Math.sqrt(3)/2)*(2/3)*side));
	var b = new Vector(tmpPoint2, tmpPoint3);
	lines.push(b);
	
	//left side
	var c = new Vector(tmpPoint3, tmpPoint);
	lines.push(c);
	
	canvas.addEventListener('click', 
	function(){
		for(i in lines)
		{ 
			draw_vector(ctx, lines[i]);
		}
	}, false);
	//drawing base
	
}