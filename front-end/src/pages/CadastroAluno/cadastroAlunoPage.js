import React from "react";
import Form from '../../components/Cadastro/cadastroAluno.js'
import Menu from "../../components/Global/menu/menu.js";

const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Login', link: '/LoginAluno' },
    { text: 'Cadastrar como Servidor', link: '/cadastroServidor' }
  ];

function cadastroAluno () {
    return (
        <>
            <Menu items={menuItems}/>
            <Form/>
        </>
    )
}

export default cadastroAluno