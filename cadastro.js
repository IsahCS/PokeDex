
let nomeInput, emailInput, senhaInput, confirmarSenhaInput

function cadastrar() {
    const loader = document.querySelector('#loading');

    nomeInput = document.getElementById("nomeCadastro").value;
    emailInput = document.getElementById("emailCadastro").value;
    senhaInput = document.getElementById("senhaCadastro").value;
    confirmarSenhaInput = document.getElementById("confirmarSenhaCadastro").value;

    localStorage.setItem("nome", nomeInput);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("senha", senhaInput);
    localStorage.setItem("confirmar senha", confirmarSenhaInput); 

    if(!validarEntradas()) {
        return;
    }
    
    if (senhaInput != confirmarSenhaInput) {
        var span0 = document.querySelector("#mensagemSenhaCadastro");
        span0.innerHTML = "Senhas não batem. Verifique o valor digitado"
        return true;
    }else{
        window.location.href = "./login.html";
        window.location.assign("./login.html");
    }
}

function validarEntradas() {
    console.log('entrou no validar');
    if ( document.getElementById("nomeCadastro").value == "")  { 
        var span = document.querySelector("#mensagemNome");
        span.innerHTML = "O campo não pode estar vazio"   
        return false;
    } 

    if  (document.getElementById("emailCadastro").value == "" || 
        (document.getElementById("emailCadastro").value.indexOf('@')==-1) ||
        (document.getElementById("emailCadastro").value.indexOf('.')==-1)) { 
        var span1 = document.querySelector("#mensagemEmail");
        span1.innerHTML = "Informe um E-MAIL válido"   
        return false;
    } 

    if ( document.getElementById("senhaCadastro").value.length < 7)  {  
        var span2 = document.querySelector("#mensagemSenha");
        span2.innerHTML = "O campo não pode ser menor que 7" 
        return false;
    }   

    if ( document.getElementById("senhaCadastro").value == "")  { 
        var span3 = document.querySelector("#mensagemSenha");
        span3.innerHTML = "O campo não pode estar vazio"   
        return false;
    } 

    if ( document.getElementById("confirmarSenhaCadastro").value == "")  { 
        var span4 = document.querySelector("#mensagemSenhaCadastro");
        span4.innerHTML = "O campo não pode estar vazio"   
        return false;
    }

    return true;
}

function redirecionarLogin(){
    window.location.href = "./login.html";
} 

function redirecionarCadastro(){
    window.location.href = "./cadastro.html";
}

const button = document.querySelector('#confirmarSenhaCadastro');

button.addEventListener('keydown', function (event) {
    console.log('APERTOU')
    if (event.keyCode === 13){
        cadastrar();
    }
});

