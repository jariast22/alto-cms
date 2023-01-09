import { COLORS } from '@/constants';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
    background-color: #fce29a;
    color: ${COLORS.gray900};
    font-family: 'Merriweather', serif;
    
  }

  .input-with-hint{
    background-color: ${COLORS.gray50};
    box-sizing: border-box;
    border: 0;
    height: 100%;

    &::placeholder {
      color: ${COLORS.gray300};
      text-transform: uppercase;
    }
  }

`;
