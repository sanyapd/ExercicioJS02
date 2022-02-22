    function operacoesMatematicas(){
        let n_decimal = [];   
        let cont_num = parseInt(prompt("Quantos números deseja inserir?"));

        for (let index = 0; index < cont_num; index++) {
            let element = parseFloat(prompt("informe um valor:"));;
            n_decimal.push(element);
        }
        let soma = 0;
        let quantidade = 0;
        for (let index = 0; index < n_decimal.length; index++) {
            
        soma = soma + n_decimal[index];
        quantidade = quantidade + 1;

        let raiz_quadrada =   Math.sqrt(n_decimal[index]);
        console.log(String(index+1) + ')raiz_quadrada: ' + String(raiz_quadrada));

        let raiz_cubica =   Math.cbrt(n_decimal[index]);
        console.log(String(index+1) + ')raiz_cubica: ' + String(raiz_cubica));

        let potencia_2 =   Math.pow(n_decimal[index], 2);
        console.log(String(index+1) + ')potencia_2: ' + String(potencia_2));
     }
        media = soma / quantidade;

        console.log('soma: ' + String(soma));
        console.log('media: ' + String(media));
        console.log(n_decimal);
    }