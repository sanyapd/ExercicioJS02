    let erro = true
    function numeroBinarioParaDecimal(){

    let num_binario = String(prompt("Informe o número binário: "));
        if (num_binario) {
        let arrayOfStrings = String(num_binario).split('');
        let numero_decimal = 0;
        for (var i = 0; i < arrayOfStrings.length; i++) {
        console.log(String(i+1) + ') ' + arrayOfStrings[i]);
        if (arrayOfStrings[i] != '0' && arrayOfStrings[i] != '1'){
            alert('Dados incorretos');
            erro = false;
            break
        }       
        numero_decimal += Math.pow(2, i) * arrayOfStrings[arrayOfStrings.length - i - 1];
        }
        alert('Número Decimal : ' + String(numero_decimal));
        console.log('Número Decimal : ' + String(numero_decimal));
        } 
        else {
        alert('Não foram informados os dados ...');
        console.log('Não foram informados os dados ...');
        erro = false;
    }
    console.log(erro);
}