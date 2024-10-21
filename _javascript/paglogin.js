function validarFormulario(){
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
   
    
    if(!nomeRegex.test(nome)){
        alert("Nome Inválido.Use apenas letras e espaços.");
        return false;
    }



    if(!emailRegex.test(email)){
        alert("E-mail inválido. Insira um e-mail válido")
        return false;
    }
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confirmarsenha").value;
    if(s1 != s2){
        alert("As senhas não conferem")
        return false
    }
 
    return true;
}