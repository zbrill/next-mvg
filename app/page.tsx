'use client'

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "./components/Logo";
import Button from "./components/Button";
import { isBrowser } from "react-device-detect";
import Link from 'next/link'
import Div100vh from "react-div-100vh";
import { getGames, Game } from '@/lib/db';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .bottomFixed {
    position: fixed;
    bottom: 0;
    left: 0;
    background: blue;
    color: white;
  }
`;

const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 600px;
  grid-gap: 1rem;
  color: blue;

  input {
    padding: 1rem;
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
    box-sizing: border-box;
    outline: none;
  }
`;


export default function Home() {
  const [room, setRoom] = useState(null);
  const [username, setUsername] = useState("");
  const [playing, setPlaying] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      roomId: ""
    }
  })

  console.log(`node env ${process.env.NODE_ENV}`);
  const onSubmit = async (roomId:string, name:string) => {
    // const games: Game[] = await getGames();

  }

  

  return (
    <Div100vh>
    <Wrapper>
          <Logo />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Room Code" {...register('roomId', { required: true })} />
            <input placeholder="Ur Name"{...register('name', { required: true })} />
            <Button htmlType="submit">Join Game</Button>
          </Form>
          {isBrowser && (
            <Link href="/new">
            <Button primary className="bottomFixed">
              New Game
            </Button>
          </Link>
          )}
    </Wrapper>
    </Div100vh>
  )
}
