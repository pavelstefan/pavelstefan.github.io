function main(){
	var minim = document.getElementById("minim").value;
	var maxim = document.getElementById("maxim").value; 
	var pas = document.getElementById("password");
	var nr =  Math.floor((Math.random() * 100)) % (maxim-minim + 1) + minim * 1;
	pas.value = nr;
}