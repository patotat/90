canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova image
	roverImgTag.onload = uploadrover; // ajustando uma função, onloading essa variável
	roverImgTag.src = roverImage;   // carregue a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keycod;
if(keyPressed == '38')
{ 
	up();
	console.log("cima");
}

if(keyPressed == '40')
{
	down();
	console.log("baixo");
}

if(keyPressed == '37')
{
	left();
	console.log("esquerda");
}

if(keyPressed == '39')
{
right();
console.log("direita");
}

}

function up()
{

	if(roverY >=0)
	{
		roverY = roverY - 10 ;
		console.log("quando a seta para cima é precionada, x = "+ roverX + " | y ="+ roverY);
		uploadBackground();
		uploadrover();
	}
}

function down()
{

	if(roverY >=500)
    {
		roverY = roverY + 10 ;
		console.log("quando a seta para cima é precionada, x = "+ roverX + " | y ="+ roverY);
		uploadBackground();
		uploadrover();
	
	}
}

function left()
{

	if(roverX >=0)
	{
		roverX = roverX - 10 ;
		console.log("quando a seta para cima é precionada, x = "+ roverX + " | y ="+ roverY);
		uploadBackground();
		uploadrover();
	}
}

function right()
{

	if(roverX >=700)
	{
		roverX = roverX + 10 ;
		console.log("quando a seta para cima é precionada, x = "+ roverX + " | y ="+ roverY);
		uploadBackground();
		uploadrover();
	}
}