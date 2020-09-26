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
  margin-top: 16em;
  margin-bottom: 8em;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const H1 = styled.h1`
  font-size: 7.5em;
  font-weight: 100;
  margin-left: -7px;
`;
export const H2 = styled.h2`
  font-size: 5em;
  font-weight: 100;
`;
export const Text = styled.span`
  font-size: 2.25em;
  color: #ccc;
  font-weight: 100;
  margin: 1em 0;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;
export const Button = styled.button`
  position: relative;
  background-color: transparent;
  font-size: 1.6em;
  letter-spacing: 1px;
  font-family: inherit;
  border: 1px solid #aaa;
  color: #ccc;
  padding: 0.75em 2em;
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
