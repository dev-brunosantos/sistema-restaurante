const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', login)

const linkLogin = document.querySelector('[data-login-btn]');


function login(evento) {
        
    if (usuario.value == '' && senha.value == '') {
        evento.preventDefault()
        return alert('Selecione o Usuário e digite a Senha')
    }
    
    if (usuario.value == usuariosDados.bruno.nome && 
        senha.value == usuariosDados.bruno.senha || 
        usuario.value == usuariosDados.monica.nome &&
        senha.value == usuariosDados.monica.senha) {
            
            return linkLogin.href = './mesas.html'
        }
        
    else {
        evento.preventDefault()
        alert("Dados incorretos")
    }
}

function testando() {

    console.log(linkLogin)
}

testando()