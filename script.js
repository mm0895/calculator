function insert(num){
	document.inputvalue.inputtext.value = document.inputvalue.inputtext.value + num;
}

function equal(){
	document.inputvalue.inputtext.value = eval(document.inputvalue.inputtext.value);
}

function c(){
	document.inputvalue.inputtext.value= "";
}

function back() {
	var exp= document.inputvalue.inputtext.value;
	document.inputvalue.inputtext.value = exp.substr(0, exp.length-1);
}