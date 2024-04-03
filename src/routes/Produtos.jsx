import {} from 'react';
import '../css/estilo-produtos.css';
import vermelho from '../assets/TENIS-VERMELHO.svg'
import branco from '../assets/TENIS-BRANCO.svg'
import azul from '../assets/TENIS-AZUL.svg'
import verde from '../assets/TESNIS-VERDE.svg'
import cinco from '../assets/FIVE-STARS.svg'

function Produtos() {
  return (
    <>
      <section className="produtos">
        <h1>Produtos</h1>

        <container>

            <div className="produtos-grade">
                <div className='produtos-item'>
                  <img src={vermelho} alt="vermelho" />
                  <p className='produtos-titulo'>HYPERBOOST</p>
                  <p className="produtos-preco">160$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
                <div className='produtos-item'>
                  <img src={branco} alt="vermelho" />
                  <p className='produtos-titulo'>ULTRAWIDE</p>
                  <p className="produtos-preco">140$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
                <div className='produtos-item'>
                  <img src={azul} alt="vermelho" />
                  <p className='produtos-titulo'>GIGANTAMAX</p>
                  <p className="produtos-preco">180$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
                <div className='produtos-item'>
                  <img src={verde} alt="vermelho" />
                  <p className='produtos-titulo'>MEGA-EVOLUTION</p>
                  <p className="produtos-preco">200$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
            </div>

            <div className="produtos-grade">
                <div className='produtos-item'>
                  <img src={azul} alt="vermelho" />
                  <p className='produtos-titulo'>GIGANTAMAX</p>
                  <p className="produtos-preco">180$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
                <div className='produtos-item'>
                  <img src={verde} alt="vermelho" />
                  <p className='produtos-titulo'>MEGA-EVOLUTION</p>
                  <p className="produtos-preco">200$</p>
                  <img src={cinco} alt="estrelas" />
                </div> 
                <div className='produtos-item'>
                  <img src={vermelho} alt="vermelho" />
                  <p className='produtos-titulo'>HYPERBOOST</p>
                  <p className="produtos-preco">160$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
                <div className='produtos-item'>
                  <img src={branco} alt="vermelho" />
                  <p className='produtos-titulo'>ULTRAWIDE</p>
                  <p className="produtos-preco">140$</p>
                  <img src={cinco} alt="estrelas" />
                </div>
              
          </div>

          <div className="produtos-grade">
              <div className='produtos-item'>
                <img src={branco} alt="vermelho" />
                <p className='produtos-titulo'>ULTRAWIDE</p>
                <p className="produtos-preco">140$</p>
                <img src={cinco} alt="estrelas" />
              </div>
              <div className='produtos-item'>
                <img src={vermelho} alt="vermelho" />
                <p className='produtos-titulo'>HYPERBOOST</p>
                <p className="produtos-preco">160$</p>
                <img src={cinco} alt="estrelas" />
              </div>
              <div className='produtos-item'>
                <img src={verde} alt="vermelho" />
                <p className='produtos-titulo'>MEGA-EVOLUTION</p>
                <p className="produtos-preco">200$</p>
                <img src={cinco} alt="estrelas" />
              </div> 
              <div className='produtos-item'>
                <img src={azul} alt="vermelho" />
                <p className='produtos-titulo'>GIGANTAMAX</p>
                <p className="produtos-preco">180$</p>
                <img src={cinco} alt="estrelas" />
              </div>
              
              
          </div>

        </container>

      </section>
    </>
  );
}
export default Produtos;