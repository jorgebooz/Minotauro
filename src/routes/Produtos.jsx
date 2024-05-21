import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit, GrTrash } from 'react-icons/gr';
import ListaProdutos from '../components/ListaProdutos';
import '../css/estilo-produtos.css';

export default function Produtos() {
  const [produtos, setProdutos] = useState(ListaProdutos);

  const handleEdit = (id) => {
    const produto = produtos.find(item => item.id === id);

    const novoNome = window.prompt('Qual o novo nome do produto?', produto.nome);
    if (novoNome !== null) {
      const novaDescricao = window.prompt('Qual a nova descrição do produto?', produto.descricao);
      if (novaDescricao !== null) {
        const novoValor = window.prompt('Qual o novo valor do produto?', produto.valor);
        if (novoValor !== null) {
          const produtoEditado = {
            ...produto,
            nome: novoNome,
            descricao: novaDescricao,
            valor: novoValor
          };
          const index = produtos.findIndex(item => item.id === id);
          const novaLista = [...produtos];
          novaLista[index] = produtoEditado;
          setProdutos(novaLista);
        }
      }
    }
  };

  const handleDelete = (id) => {
    const novaLista = produtos.filter(item => item.id !== id);
    setProdutos(novaLista);
   
  };

  return (
    <section className='mainProdutos'>
      <h1>LISTA DE PRODUTOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.descricao}</td>
                <td>{item.valor}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>
                    <GrFormEdit />
                  </button>
                  {' '}
                  |
                  <button onClick={() => handleDelete(item.id)}>
                    <GrTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
