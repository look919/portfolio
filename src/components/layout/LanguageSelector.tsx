import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Select from 'react-select';
import { Context } from '../languages/Wrapper';
const PlLang = require('../../img/pl.png');
const EnLang = require('../../img/en.png');

const GlobalStyle = createGlobalStyle`
body{

  font-family: 'futura-pt', 'HelveticaNeue-Light', 'Helvetica Neue Light','Helvetica Neue', 'Helvetica';


    p {
      
  font-family: ${({ lang }: { lang: string }) =>
    lang === 'en'
      ? "'futura-pt', 'HelveticaNeue-Light', 'Helvetica Neue Light','Helvetica Neue', 'Helvetica' "
      : "'Poppins', sans-serif"} !important;
        font-size: ${({ lang }: { lang: string }) =>
          lang === 'en' ? '1.5rem' : '1.2rem'} !important; 
    }

}
`;

const SelectorContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 8.5rem;
  z-index: 100;

  width: 5rem;
  height: 3rem;
  border: none !important;
  background-color: inherit !important;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justif-content: space-between;
`;
const SelectorImg = styled.img`
  height: 2rem !important;
  width: 2rem !important;
  cursor: pointer !important;
`;

export const LanguageSelector = () => {
  const context = useContext(Context);
  let local = localStorage.getItem('lang') || 'en';

  const options = [
    {
      value: 'en',
      label: (
        <div>
          <SelectorImg
            src={EnLang}
            className='header__select__lang'
            alt='uk flag'
          />
        </div>
      ),
    },
    {
      value: 'pl',
      label: (
        <div>
          <SelectorImg
            src={PlLang}
            className='header__select__lang'
            alt='pl flag'
          />
        </div>
      ),
    },
  ];

  if (!context) return null;

  return (
    <SelectorContainer>
      <GlobalStyle lang={local} />
      <Select
        searchable={false}
        className='select'
        defaultValue={{
          value: local,
          label: (
            <div>
              <SelectorImg
                src={local === 'en' ? EnLang : PlLang}
                className='header__select__lang'
                alt='uk flag'
              />
            </div>
          ),
        }}
        onChange={(e: any) => context.selectLang(e)}
        options={options}
      />
    </SelectorContainer>
  );
};
