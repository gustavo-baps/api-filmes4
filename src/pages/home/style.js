import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const GlobalStyle = createGlobalStyle`
    * {
        text-decoration: none;
        scroll-behavior: smooth;
    }
    body{
        margin: 0;
        padding:0;
        background-color: #060912;
    }
    #aaa {
        display: flex;
        margin-left: 37vw;
        z-index: 5;
    }
    #aaa img{
        width: 50%;
        margin-top: 3.5vw;
    }
    #resultados {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        width: 95vw;
    }
    #resultsPai h1{
        margin-left: 2vw;
        margin-top: -2vw;
    }
    #inputPesquisa {
        width: 30vw;
        height: 3vw;
        margin-left: 35vw;
        margin-bottom: 5vw;
        border-radius: 10px;
        font-weight: 700;
        margin-top: 2vw;
    }
    #h2Pesquisa {
        margin-left: 45vw;
        margin-top: 5vw;
    }
`;


export const CustomCarousel = styled(Slider)`
  width: 95%;
  margin: 0 auto;
  z-index: 5;
  background-color: #080C17;
  padding: 1vw;
  border-radius: 0.5vw;
  box-shadow: 0 5px 20px rgba(0,0,0,.55);
  margin-bottom: 2vw;
`;

export const Header = styled.header`
    z-index: 5;
    background-image: url("https://i.ibb.co/BKf0CJz/output-onlinepngtools-2.png");
    box-shadow: 0 5px 12px rgba(0,0,0,.55);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 40vw;
    width: 100%  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    #dadosFilme {
        margin-top: 4vw;
        margin-left: 3vw;
        font-size: 1.1vw;
        opacity: 60%;
        line-height: 1.5vw;
        z-index: 5;
    }
    #h1Legal {
        margin-top: -3vw;  
        padding: none;
        width: 32vw;
        font-size: 1.7vw;
        margin-left: 3vw;
    }
    #h1Legal h1 {
        text-align: left;
    }
    #descricaoFilme{
        width: 40vw;
        margin-top: -3vw;
        margin-left: 3vw;
        opacity: 80%;
        line-height: 2.5vw;
    }
    #botoes {
        width: 20vw;
        margin-left: 3vw;
        display: flex;
        margin-top: 1vw;
        z-index: 5;
    }
    #botao1 {
        padding: 0.5rem;
        border-radius: 180px;
        width: 7vw;
        height: 2.5vw;
        background-color: #FFC72C;
        box-shadow: 0 5px 12px rgba(0,0,0,.55);
        z-index: 5;
        cursor: pointer;
    }
    #botao1 a {
        color: black;
        font-weight: 600;
        margin-top: 1vw;
        margin-left: 1vw;
    }
    #botao2 {
        padding: 0.5rem;
        border-radius: 180px;
        width: 7vw;
        height: 2.5vw;
        background-color: white;
        margin-left: 1vw;
        box-shadow: 0 5px 12px rgba(0,0,0,.55);
        z-index: 5;
        cursor: pointer;
    }
    #botao2 a {
        color: black;
        font-weight: 600;
        margin-top: 1vw;
        margin-left: 0.5vw;
        z-index: 5;
    }
    a {
        text-decoration: none;
    }
`;

export const Nav = styled.nav`
    flex-direction: column;
    height: 5vw;
    z-index: 5;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`;

export const MovieList = styled.ul`
    padding: 2rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    background-color: #1F283D;
    width: 16vw !important;
    border-radius: 0.3vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 3.5vw;
    margin-top: 1.5vw;
    margin-bottom: 1.5vw;
    justify-content: space-evenly;
    box-shadow: 0 5px 5px rgba(0,0,0,.55);
    img {
        width: 100%;
        border-radius: 0.3rem;
        margin-bottom: 1rem;
        box-shadow: 0 5px 5px rgba(0,0,0,.55);
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all 0.4s;
    }
    a:hover {
        transform: scale(1.05);
    }
`;

export const Btn = styled.button`
    padding: 0.5rem;
    border-radius: 180px;
    width: 12vw;
    height: 2.5vw;
    background-color: #FFC72C;
    margin-top: 1vw;
    box-shadow: 0 5px 12px rgba(0,0,0,.55);
    cursor: pointer;
    font-weight: 700;
`;


