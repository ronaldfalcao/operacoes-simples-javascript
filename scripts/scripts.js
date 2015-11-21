function validaNumero(primeiroValor, segundoValor){

	if (!isNaN(primeiroValor) && !isNaN(segundoValor)){
		return 1; //É número.
	}
	else{
		return 0; //Não é número.
	}
}

function retornarValor(idElemento){
	return parseFloat(document.getElementById(idElemento).value);
}

function soma()
{

	var primeiroValor = retornarValor("primeiroValor");
	var segundoValor = retornarValor ("segundoValor");

    if (validaNumero(primeiroValor, segundoValor)){
    	document.getElementById('exibeTotalValores').value = primeiroValor + segundoValor;
	}
	else{
		alert ("Forneça apenas valores numéricos!");
	}
}

function subtrair()
{
	var primeiroValor = retornarValor("primeiroValor");
	var segundoValor = retornarValor ("segundoValor");

	if (validaNumero(primeiroValor, segundoValor)){
    	document.getElementById('exibeTotalValores').value = primeiroValor - segundoValor;
	}
	else{
		alert ("Forneça apenas valores numéricos!");
	}
}

function multiplicar()
{
    var primeiroValor = retornarValor("primeiroValor");
	var segundoValor = retornarValor ("segundoValor");

	if (validaNumero(primeiroValor, segundoValor)){
    	document.getElementById('exibeTotalValores').value = primeiroValor * segundoValor;
	}
	else{
		alert ("Forneça apenas valores numéricos!");
	}
}

function dividir()
{
    var primeiroValor = retornarValor("primeiroValor");
	var segundoValor = retornarValor ("segundoValor");

	if (validaNumero(primeiroValor, segundoValor)){
		if (segundoValor != 0){
    		document.getElementById('exibeTotalValores').value = primeiroValor / segundoValor;
    	}
    	else{
    		alert ("Não dividirás por zero :-)");
    	}
	}
	else{
		alert ("Forneça apenas valores numéricos!");
	}

    
}