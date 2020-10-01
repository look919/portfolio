import styled, { keyframes } from 'styled-components';

export const device = {
  desktop: '(max-width: 100em)',
  laptopL: '(max-width: 90em)',
  laptop: '(max-width: 80em)',
  tablet: '(max-width: 64em)',
  tabletS: '(max-width: 50em)',
  mobileLandscape: '(max-width: 40em)',
  mobileL: '(max-width: 30em)',
  mobile: '(max-width: 25em)',
  mobileS: '(max-width: 21.25em)',
};

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
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: calc(100% - 3rem) 3rem;

  align-items: center;
  justify-items: center;

  animation: ${showUp} 1.5s ease-out 0.25s both;

  @media ${device.mobileL} {
    grid-template-rows: calc(100% - 2.5rem) 2.5rem;
  }
`;

export const H1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 100;
  margin-left: -7px;

  animation: ${showUp} 1s ease-in;

  @media ${device.laptopL} {
    font-size: 4.4rem;
  }
  @media ${device.mobileLandscape} {
    font-size: 3rem;
    margin-left: -4px;
  }
  @media ${device.mobile} {
    font-size: 2.6rem;
  }
  @media ${device.mobileS} {
    font-size: 2.2rem;
  }
`;
export const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 100;

  animation: ${showUp} 1s ease-in;

  @media ${device.laptopL} {
    font-size: 3rem;
  }
  @media ${device.mobileLandscape} {
    font-size: 2.2rem;
  }
  @media ${device.mobile} {
    font-size: 1.9rem;
  }
  @media ${device.mobileS} {
    font-size: 1.6rem;
  }
`;
export const Text = styled.span`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 100;

  animation: ${showUp} 1s ease-out 1s both;

  @media ${device.mobileLandscape} {
    font-size: 1.2rem;
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 100;
  margin-top: 1rem;
  width: 90%;
  text-align: center;

  animation: ${showUp} 1s ease-out 1s both;

  @media ${device.mobileL} {
    margin-top: 0;
  }
  @media ${device.mobile} {
    width: 95%;
  }
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

  @media ${device.laptopL} {
    margin-top: 1.5rem;
  }
  @media ${device.mobile} {
    margin-top: 1rem;
  }
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

  @media ${device.mobileLandscape} {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  @media ${device.mobile} {
    font-size: 0.6rem;
    padding: 0.5rem 0.8rem;
  }

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
    pointer-events: none;
  }
`;
export const Form = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;

  @media ${device.mobileLandscape} {
    width: 90%;
  }
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

  @media ${device.mobileLandscape} {
    font-size: 1rem;
  }
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  color: white;

  @media ${device.mobileLandscape} {
    font-size: 1rem;
  }

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

  @media ${device.mobileLandscape} {
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }
`;
