import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit, GrTrash } from 'react-icons/gr';
import ListaProdutos from '../components/ListaProdutos';
import '../css/estilo-produto.css';

export default function Produtos() {
  // Inicializa o estado dos produtos com a lista de produtos
  const [produtos, setProdutos] = useState(ListaProdutos);

  const handleEdit = (id) => {
    // Lógica de edição
  };

  const handleDelete = (id) => {
    // Confirmação de exclusão
    const confirmacao = window.confirm('Tem certeza que deseja excluir este produto?');
    if (confirmacao) {
      // Remove o produto da lista
      const novaLista = produtos.filter(item => item.id !== id);
      // Atualiza o estado dos produtos com a lista atualizada
      setProdutos(novaLista);
    }
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
