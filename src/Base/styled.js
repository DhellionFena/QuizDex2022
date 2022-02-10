import styled from 'styled-components';

export const ShapeQuiz = styled.div`
  width: 80vw;
  min-height: 55vh;
  /* background-color: #f0f0f0; */

  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-bottom: 20px;
`

export const BodyQuiz = styled.div`
    width: 100%;
    min-height: 86%;
    background-color: #5962ae;
    -webkit-border-bottom-right-radius: 20px;
-webkit-border-bottom-left-radius: 20px;
-moz-border-radius-bottomright: 20px;
-moz-border-radius-bottomleft: 20px;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
padding: 20px;

    ul {
        padding: 10px 40px;
        display: flex;
        width: 100%;
        min-height: 350px;

        flex-flow: column nowrap;
        justify-content: space-around
    }

`

export const HeadQuiz = styled.h1`
    width: 100%;
    min-height: 14%;
    background-color: #eb1e28;
    -webkit-border-top-left-radius: 20px;
    -webkit-border-top-right-radius: 20px;
    -moz-border-radius-topleft: 20px;
    -moz-border-radius-topright: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    padding: 20px;

`

export const Botao = styled.button`

    background-color: #eb1e28;
    color: white;
    outline: none;
    font-size: 1.5rem;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;

    :hover {
        background-color: #93171d;
    }
`

export const BoxQuiz = styled.div`
    width: 100%;
    min-height: 280px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;

    font-size: 1.25rem;

    input {
        margin-right: 4px;
    }
`

export const BoxResultado = styled.div`
    width: 100%;
    min-height: 280px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;

    input {
        margin-right: 4px;
    }
`