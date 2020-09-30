import React, { useContext, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Select from 'react-select';
import { Context } from '../languages/Wrapper';
import { device } from './defaultStyles';
import { useMediaQuery } from 'react-responsive';

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

      @media ${device.desktop} {
        font-size: ${({ lang }: { lang: string }) =>
          lang === 'en' ? '1.3rem' : '1rem'} !important; 
      }
      @media ${device.laptopL} {
        font-size: ${({ lang }: { lang: string }) =>
          lang === 'en' ? '1.15rem' : '1rem'} !important; 
      }
      @media ${device.mobile} {
        font-size: ${({ lang }: { lang: string }) =>
          lang === 'en' ? '0.9rem' : '0.8rem'} !important; 
      }
      @media ${device.mobileS} {
        font-size: ${({ lang }: { lang: string }) =>
          lang === 'en' ? '0.8rem' : '0.65rem'} !important; 
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
  flex-direction: column;
  align-items: center;
  justif-content: space-between;

  @media ${device.mobileLandscape} {
    top: 0.75rem;
    right: 5.5rem;
  }
  @media ${device.mobileL} {
    top: 1rem;
    width: auto;
    height: auto;
  }
`;
const SelectorImg = styled.img`
  height: 2rem !important;
  width: 2rem !important;
  cursor: pointer !important;
  top: 2.5rem;
  right: 5rem;
`;
const LangSelector = styled.button`
  background: none;
  border: none;
  margin: 0.2rem 0;
  &:focus,
  &:active {
    outline: none;
  }
`;
const Flag = styled.img`
  width: 1.4rem;
  height: 1.2rem;
  transition: all 0.5s;
`;

export const LanguageSelector = () => {
  const context = useContext(Context);
  let local = localStorage.getItem('lang') || 'en';
  const isMobile = useMediaQuery({ query: '(max-width: 30em)' });
  const langBtns = {
    pl: { value: 'pl' },
    en: { value: 'en' },
  };

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
    <Fragment>
      <GlobalStyle lang={local} />

      <SelectorContainer>
        {!isMobile ? (
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
        ) : (
          <Fragment>
            <LangSelector onClick={() => context.selectLang(langBtns.en)}>
              <Flag src={EnLang} alt='en lang' />
            </LangSelector>
            <LangSelector onClick={() => context.selectLang(langBtns.pl)}>
              <Flag src={PlLang} alt='pl lang' />
            </LangSelector>
          </Fragment>
        )}
      </SelectorContainer>
    </Fragment>
  );
};
