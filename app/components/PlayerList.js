import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 2rem 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  list-style: none;
`;

const Player = styled.li`
  font-size: 16px;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
`;

const PlayerList = ({ players }) => (
  <List>
    {players.map(player => {
      return <Player key={player.name}>{player.name}</Player>;
    })}
  </List>
);

export default PlayerList;
