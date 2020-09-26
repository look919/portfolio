import styled, { keyframes } from 'styled-components';

export const showUp = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Page = styled.main`
  position: relative;
  margin: 0;
  margin-top: 10rem;
  margin-bottom: 4rem;

  height: calc(100vh - 14rem);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: calc(100% - 3rem) 3rem;

  align-items: center;
  justify-items: center;

  animation: ${showUp} 1.5s ease-out 0.25s both;
`;

export const H1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 100;
  margin-left: -7px;

  animation: ${showUp} 1s ease-in;
`;
export const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 100;

  animation: ${showUp} 1s ease-in;
`;
export const Text = styled.span`
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 100;
  margin-top: 1rem;

  animation: ${showUp} 1s ease-out 1s both;
`;
export const A = styled.a`
  &:visited,
  &:link {
    color: #fff;
    font-weight: 100;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  animation: ${showUp} 1s ease-out 1.5s both;
`;
export const Button = styled.button`
  position: relative;
  background-color: transparent;
  font-size: 1rem;
  letter-spacing: 1px;
  font-family: inherit;
  border: 1px solid #aaa;
  color: #ccc;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    margin-left: -3px;
    height: 12px;
    width: 6px;
    background-color: #ccc;

    transform: translateY(-50%);
    transition: all 0.2s;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: #000;
    background-color: #ccc;
  }
`;
