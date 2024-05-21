import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit, GrTrash } from 'react-icons/gr';
import ListaProdutos from '../components/ListaProdutos';
import '../css/estilo-produtos.css';

export default function Produtos() {
  // Inicializa o estado dos produtos com a lista de produtos
  const [produtos, setProdutos] = useState(ListaProdutos);

  const handleEdit = (id) => {
    const produto = produtos.find(item => item.id === id);

    // Solicita ao usuário o novo nome do produto
    const novoNome = window.prompt('Qual o novo nome do produto?', produto.nome);
    if (novoNome !== null) {
      // Solicita ao usuário a nova descrição do produto
      const novaDescricao = window.prompt('Qual a nova descrição do produto?', produto.descricao);
      if (novaDescricao !== null) {
        // Solicita ao usuário o novo valor do produto
        const novoValor = window.prompt('Qual o novo valor do produto?', produto.valor);
        if (novoValor !== null) {
          // Atualiza o produto na lista
          const produtoEditado = {
            ...produto,
            nome: novoNome,
            descricao: novaDescricao,
            valor: novoValor
          };
          const index = produtos.findIndex(item => item.id === id);
          const novaLista = [...produtos];
          novaLista[index] = produtoEditado;
          // Atualiza o estado dos produtos com a lista atualizada
          setProdutos(novaLista);
        }
      }
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
                  <Link to={`/excluir/${item.id}`}>
                    <GrTrash />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
