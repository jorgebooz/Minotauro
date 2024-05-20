import { useRef } from 'react';
import Home from './Home';
import '../css/estilo-login.css';

function Login() {
  const usuario = useRef();
  const senha = useRef();
  const getUsuario = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (usuario.current.value == 'usuario' && senha.current.value == '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
    } else {
      alert('Usuario e senha Inválidos !!!');
    }
  };

  return (
    <section className="login">
      {getUsuario && getSenha ? (
        <Home/>
      ) : (
        <div className='containerLogin'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className='optionsLogin'>
            <p className='textLogin'>
              USUÁRIO:
              <input type="text" placeholder="Digite seu Usuário" ref={usuario} className='inputLogin' />
            </p>
            <p className='textLogin'>
              SENHA:
              <input type="password" placeholder="Digite sua senha" ref={senha} className='inputLogin' />
            </p>
            <button type="submit">ENTRAR</button>
          </form>
          </div>
      )}
    </section>
  );
}
export default Login;
