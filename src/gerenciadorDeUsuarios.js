const usuarios = ['Mateus','Marcos', 'Lucas', 'João'];

function retornarListaDeUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarListaDeUsuarios,
    adicionarNovoUsuario
}