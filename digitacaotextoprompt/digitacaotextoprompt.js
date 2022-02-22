function digitacaoDeTexto(){

        var erro = true
        var txt = prompt("Digite um texto :");    
        if (txt) {
            console.log(txt);
            let maiusculas = txt.toUpperCase();
            let minusculas = txt.toLowerCase();
            alert("Valor: " + txt + " >> MAIUSCULAS: " + maiusculas + " >> minusculas: " + minusculas) 
            console.log("Valor: " + txt + " >> MAIUSCULAS: " + maiusculas + " >> minusculas: " + minusculas); 
            splitString(txt)
        }
        else {
            alert('Não foram informados dados ...');
            console.log('Não foram informados dados ...');
            erro = false;
        }
        console.log(erro);
    }
        function splitString(stringToSplit, separator='') {
        var arrayOfStrings = stringToSplit.split(separator);
        console.log('A string é: "' + stringToSplit + '"');
        console.log('O separador é: "' + separator + '"');
        console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' >> '));
        for (var i = 0; i < arrayOfStrings.length; i++) {
            console.log(arrayOfStrings[i]);
        }  
    }