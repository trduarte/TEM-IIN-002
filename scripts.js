//5 - Para poder finalizar o desafio é preciso informar uma senha adquirida ao derrotar Bowser. Porém o sistema foi programado para modificar a senha assim que você digita-la e apertar OK. Você deve pensar numa maneira de impedir que o sistema atribua um novo valor a variavel declarada como var senha, e assim modofique a variael. 
// Dica? lembre dos conceitos de declação de variável com let, var e const.


/* function validasenha(){
    try{
        senha = prompt("digite a senha");
        senha = "#jbsjas"
    }
    catch(e){
        if (e instanceof TypeError){
            alert("O Sistema não conseguiu alterar a senha. Procedendo com o comportamento normal")
        }
    }
    if(senha=="Teste"){
        alert("Parabens vc completou o desafio")
    }else{
        alert("A senha " + senha+ " é invalida. Por favor insira a senha correta clique no botão para tentar de novo ")
        document.getElementById("senha").innerHTML = "<button onclick='validasenha()'>Tente novamente</button"
    }
} */


// Descobrir entre tres numeros aleatórios quem é o maior e o menor e mostra-los na console
/* var num1= 2, num2 = 3, num3= 1;
var maior, menor;
if(num1>num2){
    maior= num1;
    menor = num2;
}else{
    maior = num2;
    menor = num1;
}
if (maior<num3){
    maior = num3
}else if( menor>num3){
    menor= num3;
}
console.log("numero maior= "+maior+"\n"+"numero menor= "+menor+"\n") */


// Mostar nomes dos clientes junto com suas respectivas idades. POrém o programador salvou as idades em ordem descrescente no banco.
// o código tem que funcionar indepedente do tamnanho da minha lista de clientes.
/* var nomes = ["José", "Luana","Ricardo", "Cláudia","Jennifer"]
var idades = [1997,2008,1998,1990,1985]
var j= idades.length
var anos = new Date().getFullYear()
for (i=0;i<nomes.length;i++){
    let idade_real = anos - idades[j-1];
    console.log(nomes[i]+" tem "+ idade_real+" anos")
    j--
}
 */

function randomize(){
    return Math.floor(Math.random()*100)
}

var num1=randomize(), num2=randomize(), num3=randomize()


// Validação de CPF

/* var cpf = "12345678909"
var somaval=0, multiplier=10;
var resposta =""
for (dig=0;dig<cpf.length-2;dig++){
    somaval += cpf[dig]*multiplier
    multiplier--
}
if((somaval*10)%11 == cpf[9] || (somaval*10)%11 == cpf[9]+10 || (somaval*10)%11 == cpf[9]+11){
    multiplier=11;
    somaval=0;
    for(dig=0;dig<cpf.length-1;dig++){
        somaval += cpf[dig]*multiplier
        multiplier--
    }
    if((somaval*10)%11 == cpf[10] || (somaval*10)%11 == cpf[10]+10 || (somaval*10)%11 == cpf[10]+11) {
        resposta = "CPF "+ cpf +" é valido!\n"
    }else{
        resposta = "CPF "+ cpf +" é invalido!\n"
    }
}else{
    resposta = "CPF "+ cpf +" é invalido!\n"
}
console.log(resposta)
 */
