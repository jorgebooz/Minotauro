import {} from 'react';
import '../css/estilo-contato.css';

function Contato() {
    return (
      <>
      <div className='container bg-image'>
        <div className='main'>
            <div className='contato-top azul'>
                <h1>PORTAL</h1>
                <h1>DO CLIENTE</h1>
                <p>Como podemos <a>te ajudar?</a></p>
            </div>
                
                <div className='contato-card'>
                    <p className='titulo'>MEUS PEDIDOS</p>
                    <p className='card-text'><a class="azul">ᐳ</a>Acompanhar meus pedidos</p>
                    <p className='card-text'><a class="azul">ᐳ</a>Histórico de pedidos</p>
                </div>
                <div className='contato-card'>
                    <p className='titulo'>TROCAS & CANCELAMENTO</p>
                    <p className='card-text'><a class="azul">ᐳ</a>Cancelar um pedido</p>
                    <p className='card-text'><a class="azul">ᐳ</a>Trocar um pedido</p>
                </div>
                <div className='contato-card'>
                    <p className='titulo'>MEUS DADOS</p>
                    <p className='card-text'><a class="azul">ᐳ</a>Cancelar um pedido</p>
                    <p className='card-text'><a class="azul">ᐳ</a>Trocar um pedido</p>
                </div>
        </div>
        
      </div>
        
      </>
    );
  }
  
  export default Contato;