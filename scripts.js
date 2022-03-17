
let num1=Math.floor(Math.random()*100),num2=Math.floor(Math.random()*100),num3=Math.floor(Math.random()*100);

const namelist = ["Jhonny", "Yuna", "Pedro", "Agatha","Cleiton","Paula","Joaquim","Kleston","Fred"]
const yearlist = [2000,1999,1987,1990,2005,2003,1980,1994,2001,1984]
var nomes = Array(5)
var idades = Array(5)
let userid = getvalue(1)
let passwd = getvalue(0)
let CPF = geracpf(1)
let clicks =0

function loadq(evt, desafio) {

    var tabcontent, tablinks;
  

    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  

    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  

    document.getElementById(desafio).style.display = "block";
    evt.currentTarget.className += " active";
} 

function randomize(btn){
    switch(btn){
        case "D1":
            num1=Math.floor(Math.random()*100)
            num2=Math.floor(Math.random()*100)
            num3=Math.floor(Math.random()*100)
            break;
        case "D2":
            for(let i= 0;i<nomes.length;i++){
                nomes[i]= namelist[Math.floor(Math.random()*namelist.length)]
                idades[i]= yearlist[Math.floor(Math.random()*namelist.length)]
            }
            break;
        case "D3.1":
            userid = getvalue(1)
            break
        case "D3.2":
            passwd = getvalue(0)
            break
        case "D4.1":
            CPF = geracpf(1)
            break
        case "D4.0":
            CPF = geracpf(0)
            break

    } 
}
function getvalue(key) {
    let len = Math.floor(Math.random() * (16 - 3)) + 3
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><.:'{}[]";
    var passwordLength = len;
    var conteudo = "";
    for (let i = 0; i < passwordLength; i++) {
        if(len<3) len +=2
        var randomNumber = Math.floor(Math.random() * chars.length);
        conteudo += chars.substring(randomNumber, randomNumber + 1);
    }
    if (key == 1){
        return conteudo.toLowerCase()
    }else{
        return conteudo
    }  
}
function geracpf(tipo){
    var fpc = "0123456789"
    var somafpc=0
    var cpfinal =""
    if (tipo){
        for(let i = 1;i<=9;i++){
            var rdn = Math.floor(Math.random() * fpc.length)
            cpfinal+= fpc.substring(rdn, rdn + 1)
            somafpc += parseInt(fpc.substring(rdn, rdn + 1))*(11-i);
        }
        if(somafpc%11<2){
            cpfinal+=0
        }else{
            cpfinal+= (11 -(somafpc%11))
        }
        somafpc=0
        for(let i = 1;i<=10;i++){
            somafpc += parseInt(cpfinal.substring(i-1, i))*(12-i);
        }
        if(somafpc%11<2){
            cpfinal+=0
        }else{
            cpfinal+= (11 -(somafpc%11))
        }
        return cpfinal
    }else{
        for(let i = 1;i<=11;i++){
            var rdn = Math.floor(Math.random() * fpc.length)
            cpfinal+= fpc.substring(rdn, rdn + 1)
            if(i<=9){
                somafpc += parseInt(fpc.substring(rdn, rdn + 1))*(11-i);
            }
        }
        if(parseInt(cpfinal.substring(9,10))==11-(somafpc%11))
            cpfinal[9]=(cpfinal[9]+100)%3
        return cpfinal
    } 
}  
function checkpalavra(){
    clicks +=1
    try{
        palavra = prompt("Digite a palavra-passe","TurmaLinda")
        palavra = "VARAIAL ALTERADA :D"
    }catch(e){
        if (e instanceof TypeError){
            alert("ERRO: O Sistema não conseguiu alterar a palavra passe. Finalizando o Desafio!")
        } 
    }
    if(palavra=="TurmaLinda"){
        alert("PARABENS VOCÊS COMPLETARAM O DESAFIO! :)")
    }else{
        if(clicks<=1){
            document.getElementById("ops").innerHTML = "OPS! Tava fácil demais :<. O JS do site está atribuindo um valor novo para a variavel <b>palavra</b> que recebe a palavra-passe quando você digita. \n Insira uma única linha de comando na console e faça com que não seja mais possível alterar a alteração do conteudo da variável e assim complete o desafio!!!.\n Depois que inserir o comando na console aperte enter e clique novamente no botão abaixo.<br><br>"
        }else if(clicks < 5){
            document.getElementById("ops").innerHTML = "hum hum Também não foi dessa vez! <br>Você tentou apenas " + clicks + " vezes! Tentei mais. Confio em você :)<br>"
        }
        else{
            document.getElementById("ops").innerHTML = "hum hum Também não foi dessa vez! <br>Você tentou apenas " + clicks + " vezes! Tentei mais. Confio em você :)<br> <br><b>DICA:</b>Se você tentou redeclarar a variavel palavra usando let você quase acertou! Porém, vc vai ter que atualizar a página para tentar novamente e conseguir concluir o desafio já que o comando let não permite vc redeclarar variáveis com o mesmo nome, mas  permite a atribuições de valores novos<br><br>"
        } 
        
    }
}
function reload(){
    location.reload
}

