const { retornarListaDeUsuarios, adicionarNovoUsuario } = require('../src/gerenciadorDeUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome na lista de usuários;
        adicionarNovoUsuario('Thiago');

        //2. Retornar os nomes da lista de usuários em uma caixa;
        const listaDeUsuarios = retornarListaDeUsuarios();

        //3. Verificar se o último nome da lista é igual ao nome que eu coloquei.
        expect(listaDeUsuarios.at(-1)).to.equal('Thiago');
    });
});