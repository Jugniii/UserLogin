let un=document.getElementById("email");
let un=document.getElementById("password");
let un=document.getElementById("address");
let un=document.getElementById("graduation");
let un=document.getElementById("branch");
let un=document.getElementById("yop");

function registerUser() {
	let userData={
		username:un.value,
		password=pass.value,
		address=add.value,
		graduation:gd.value,
		branch:branch.value,
		yop:yop.value
	}
	saveData(userData);
	clearFeild();
	open("Login.html");
}
function clearFeild(){
	un.value=" ";
	pass.value=" ";
	gd.value=" ";
}