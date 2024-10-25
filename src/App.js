import { useState } from "react";
import "./styles.css";

const frutas = [
  {
    nome: "Melancia",
    preco: 7,
  },
  {
    nome: "Banana",
    preco: 5,
  },
  {
    nome: "tangerina",
    preco: 8,
  },

  {
    nome: "laranja",
    preco: 10,
  },
  {
    nome: "limão",
    preco: 8,
  },
  {
    nome: "morango",
    preco: 6,
  },
  {
    nome: "mamão",
    preco: 4,
  },
];

export default function App() {
  const [frutasFiltradas, setFrutasFiltradas] = useState([]);

  const promocao = () => {
    setFrutasFiltradas(
      frutas.filter((elemento) => {
        return elemento.preco <= 7;
      })
    );
  };

  return (
    <section>
      <h1>Mercearia do prefeito</h1>
      <button onClick={promocao}>Frutas na promoção</button>
      <div>
        {frutasFiltradas.map((item) => (
          <ul>
            <li>{item.preco}</li>
            <li>{item.nome}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
