import React from "react";
import { Container } from "./styles";



const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const onChangeBuscaId = (e) => {
    props.setBuscaId(e.target.value);
    console.log(e.target.value);
  };

  const onChangeBuscaNome = (e) => {
    props.setBuscaNome(e.target.value);
  };

  const onChangeOrdenar = (e) => {
    props.setOrdenar(e.target.value);
  };

  const onChangeTipo = (e) => {
    props.setTipo(e.target.value);
  };
  return (
    <Container>
      <input
        type="number"
        placeholder="Buscar por id"
        onChange={onChangeBuscaId}
        value={props.buscaId}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={onChangeBuscaNome}
        value={props.buscaNome}
      />
      <select onChange={onChangeOrdenar}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo" value={props.tipo} onChange={onChangeTipo}>
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
