import {} from 'react';
import '../css/estilo-sobre.css'
import foguete from '../assets/FOGUETE.svg'

function Sobre() {
  return (
    <>
      <section className="sobre">
        <div className='header'>
          <div className='titulo'>
            <h1><a className='azul'>Quem</a> somos nós?</h1>
          </div>
          
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className='card'>
          <img src={foguete} alt="foguetada" />
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        
      </section>


    </>
  );
}
export default Sobre;