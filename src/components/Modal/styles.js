import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 25px;
  max-width: 1200px;

  button {
    margin-left: 25px;
    margin-top: -500px;
    width: 30px;
    background-color: red;
    border: none;
    cursor: pointer;
    color: #ffffff;
  }
`
