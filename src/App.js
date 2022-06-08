//Libs
import React, { useState } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

//Image
import Heart from "./assets/heart.png";

//Style
const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d8bfd8;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerTitle = styled.div`
  width: 100%;
  height: 20vh;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc2bb;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const IconHeart1 = styled.img`
  width: 8rem;
  height: 8rem;
  padding: 2rem;

  @media (max-width: 480px) {
    display: none;
  }
`;

const IconHeart2 = styled.img`
  width: 8rem;
  height: 8rem;
  padding: 2rem;

  @media (max-width: 480px) {
    width: 3rem;
    height: 2rem;
    padding: 0;
  }
`;

const Button = styled.button`
  width: 12rem;
  height: 4rem;
  font-size: 1.5rem;
  border-radius: 5px;
  border: transparent;
  color: white;
  background-color: #ff4040;

  :hover {
    cursor: pointer;
    background-color: #cd3333;
    transition: background-color 1s;
    color: white;
    transition: color 1s;
  }
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  padding: 2rem;
  border: transparent;

  @media (max-width: 480px) {
    width: 12rem;
    height: 10rem;
  }
`;

export default function App() {
  const [Dog, setDog] = useState();

  function apiList() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      //console.log(response.data.message)
      setDog(response.data.message);
    });
  }

  return (
    <Body>
      <ContainerTitle>
        <IconHeart1 src={Heart} alt="Imagem de coração" />
        <Title>TERAPIA GRATUITA</Title>
        <IconHeart2 src={Heart} alt="Imagem de coração" />
      </ContainerTitle>
      <Button onClick={() => {apiList();}} > CLIQUE AQUI </Button>
      <Image src={Dog} alt="" />
    </Body>
  );
}
