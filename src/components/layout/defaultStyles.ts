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
export const HighlitedText = styled.span`
  color: #fff;
  font-weight: 100;
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

  transition: all 0.2s;

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
  &:disabled {
    color: #343;
  }
`;
export const Form = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 0.5rem;
  padding-top: 4px;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
`;
export const Placeholder = styled.span`
  margin-right: 7px;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  color: white;

  font-family: 'futura-pt', 'HelveticaNeue-Light', 'Helvetica Neue Light',
    'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;

  &:focus {
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  resize: none;
  height: 12rem;
  background-color: transparent;
  border: 1px solid #ccc;
  color: white;
  padding: 0.6rem 0.5rem;
  padding-bottom: 2px;
  font-size: 1.1rem;
  font-family: 'futura-pt', 'HelveticaNeue-Light', 'Helvetica Neue Light',
    'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;

  &:focus {
    outline: none;
  }
`;
