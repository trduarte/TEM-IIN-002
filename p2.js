//Variaveis desafio 3
var segundos =59
var minutos = 4

// caixa de texto exemplo CPF
var exemplo = document.getElementById('exemplo')

// criação objeto cadastrar
class Cadastro{
    constructor(usuario,data_nasc,telefone){
        this.usuario=usuario;this.data_nasc=data_nasc;this.telefone=telefone
    }
}
const cadastro = Array([])
cadastro[0] = new Cadastro

function gera_cadastro(){
    if(cadastro[cadastro.length]==undefined){
        cadastro[cadastro.length] = new Cadastro
    }
}

// carrega tabs dos desaftios
function loadtab(evt, desafio) {
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

// gera cpf de exemplo
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
        exemplo.style.color = "green"
        return exemplo.value = cpfinal
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
            exemplo.style.color = "red"
            return exemplo.value = cpfinal
    } 
}  

