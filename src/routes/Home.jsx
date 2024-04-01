import {} from 'react';
import '../css/estilo.css';
import jordan from "../assets/JORDAN.png"
import colecoes from '../assets/COLECOES.png'

function Home() {
  return (
    <>
      <div className="home-main">

        <div className="jordan">
          <img src={jordan} alt="Jordan" className='home-image'/>

          <a href="" className="btn">
            MAIS PRODUTOS &#8594;
          </a>       
        </div>

        <img src={colecoes} alt="colecoes" className='home-image'/>

      </div>
    </>
  );
}

export default Home;