import { COLORS } from '@/constants';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
    background-color: #fce29a;
    color: ${COLORS.gray900};
    font-family: 'Merriweather', serif;
    
  }
`;
