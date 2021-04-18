let pegarEmail = document.getElementById("emailLogin")
let pegarSenha = document.getElementById("senhaLogin")
let pegarDados = {
    email: localStorage.getItem("email"),
    senha: localStorage.getItem("senha")
}

function logar(){
    if (pegarEmail.value != pegarDados.email || pegarSenha.value != pegarDados.senha) {
        var span5 = document.querySelector("#mensagem1")
        span5.innerHTML = "Email ou senha incorretos"
        return true; 
    }else {
        window.location.href = "./index.html"
    }
} 


function redirecionarLogin(){
    window.location.href = "./login.html";
} 

function redirecionarCadastro(){
    window.location.href = "./cadastro.html";
}


const button = document.querySelector('#senhaLogin');

button.addEventListener('keydown', function (event) {
    console.log('APERTOU')
    if (event.keyCode === 13){
        logar()
    }
});
