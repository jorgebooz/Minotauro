import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import jordan from "../assets/JORDAN.svg";
import mizuno from '../assets/MIZUNO.svg';
import forum from '../assets/FORUM.svg';
import { motion } from "framer-motion";
import vermelho from '../assets/TENIS-VERMELHO.svg'
import branco from '../assets/TENIS-BRANCO.svg'
import azul from '../assets/TENIS-AZUL.svg'
import verde from '../assets/TESNIS-VERDE.svg'
import cinco from '../assets/FIVE-STARS.svg'

function Home() {
  const images = [
    jordan,
    mizuno,
    forum
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (  
      <div className="mainHome">
        
        <p className='textHome'>
          <h1 className='tituloHome'>Bem-vindo a MINOTAURO!</h1>

          Bem-vindo à Minotauro, sua loja de artigos esportivos! Aqui, você encontra produtos de alta qualidade para todas as suas necessidades esportivas, desde roupas e calçados até 
          equipamentos. Explore nosso site e descubra como podemos ajudá-lo a alcançar seus objetivos e aprimorar seu desempenho. Conte conosco para fazer parte da sua jornada esportiva!
        </p>
        <a href="/produtos">
          <motion.img 
            src={images[currentIndex]} 
            alt='carousel'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            className='homeImage'
          />
        </a>

          <div className="produtos-grade produtosHome">
              <Link to="/produtos" className='produtos-item'> {/* Use Link aqui também */}
              <img src={vermelho} alt="vermelho" />
              <p className='produtos-titulo'>HYPERBOOST</p>
              <p className="produtos-preco">160$</p>
              <img src={cinco} alt="estrelas" />
            </Link>
            <Link to="/produtos" className='produtos-item'> {/* Use Link aqui também */}
              <img src={branco} alt="vermelho" />
              <p className='produtos-titulo'>ULTRAWIDE</p>
              <p className="produtos-preco">140$</p>
              <img src={cinco} alt="estrelas" />
            </Link>
            <Link to="/produtos" className='produtos-item'> {/* Use Link aqui também */}
              <img src={azul} alt="vermelho" />
              <p className='produtos-titulo'>GIGANTAMAX</p>
              <p className="produtos-preco">180$</p>
              <img src={cinco} alt="estrelas" />
            </Link>
            <Link to="/produtos" className='produtos-item'> {/* Use Link aqui também */}
              <img src={verde} alt="vermelho" />
              <p className='produtos-titulo'>MEGA-EVOLUTION</p>
              <p className="produtos-preco">200$</p>
              <img src={cinco} alt="estrelas" />
            </Link>
          </div>
            
      </div>
  );
}

export default Home;
