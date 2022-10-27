import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [ordenar, setOrdenar] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        ordenar={ordenar}
        setOrdenar={setOrdenar}
        tipo={tipo}
        setTipo={setTipo}
      />
      <CardsContainer>
      {pokemons
        
          .filter((pokemon) => {
            return pokemon.id.includes(idFilter);
          })
          .filter((pokemon) => {
         
            return pokemon.name.english
              .toLowerCase()
              .includes(pesquisa.toLowerCase());
          })
          .sort((a, b) => {
          
            if (ordenar === "crescente") {
              return a.name.english > b.name.english ? 1 : -1;
            
            } else if (ordenar === "decrescente") {
              if (a.name.english < b.name.english) {
                return 1;
              } else {
                return -1;
              }
            }
          })
          .filter((pokemon) => {
     
            return tipo ? pokemon.type.includes(tipo) : pokemon;
          })
    
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
