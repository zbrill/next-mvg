'use client'

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Logo from "../components/Logo";
import Button from "../components/Button";
import PlayerList from "../components/PlayerList";


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;

  h1 {
    margin: 0 0 2rem;
  }
`;

const Code = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
`;

const Actions = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
`;

const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 600px;
  grid-gap: 1rem;
  margin: 0 auto;

  input {
    padding: 1rem;
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
    box-sizing: border-box;
    outline: none;
  }
`;

const Home = () => {
  const [room, setRoom] = useState(null);
  const [players, setPlayers] = useState([]);
  // const [cookies, setCookie] = useCookies();
  console.log(process.env.NODE_ENV);


  // const history = useHistory();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    // const fetchRoom = () => {
    //   db.collection(`games`)
    //     .doc(room)
    //     .onSnapshot(doc => {
    //       const { id } = doc;
    //       const { players } = doc.data();

    //       setRoom(id);
    //       setPlayers(players);
    //     });
    // };

    // if (room) {
    //   fetchRoom();
    // }
  });

  const handleCreateGame = async ({ username, theme }) => {
    const id = makeid(4);
    let tomorrow = new Date();
    tomorrow.setHours(tomorrow.getHours() + 24);

    try {
      console.log('button clicked');
    } catch (e) {
      console.error(e);
    }
  };

  const handleStartGame = async () => {
    try {
      db.collection(`games`)
        .doc(room)
        .update({
          playing: true
        });
    } catch (e) {
      console.error(e);
    } finally {
      history.push(`/`);
    }
  };

  const makeid = length => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <Wrapper>
      <>
        <Logo />
        {room && (
          <Code>
            Room Code: <br />
            {room}
          </Code>
        )}
        {players?.length > 0 && <PlayerList players={players} />}
        {room ? (
          <Actions>
            <Button onClick={handleStartGame}>Start Game</Button>
          </Actions>
        ) : (
          <Actions>
            <Form onSubmit={handleSubmit(handleCreateGame)}>
            <input 
              type="text"
              {...register('username', { required: true })} 
              placeholder="Name"/>
              <input 
              type="text"
              {...register('theme', { required: true })} 
              placeholder="Optionally, create a theme for the game"/>
              <Button htmlType="submit">New Game</Button>
            </Form>
          </Actions>
        )}
      </>
    </Wrapper>
  );
};

export default Home;
