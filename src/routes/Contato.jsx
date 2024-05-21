import React, { useState } from 'react';
import '../css/estilo-contato.css';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 

        alert('E-mail enviado');

        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <div className='mainContato'>
            <section id="contato">
                <div id="header-form">
                    <h2>Contato</h2>
                </div>
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="form-content">
                        <label htmlFor="username" className="label-title">Nome</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="email" className="label-title">E-mail</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-content" id="duvidas">
                        <label htmlFor="mensagem" className="label-title">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder="Feedbacks, comentários, dúvidas, dicas..."
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" id="botao">Enviar</button>
                </form>
            </section>

        </div>
    );
}

export default Contato;
