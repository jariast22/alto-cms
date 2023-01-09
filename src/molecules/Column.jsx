import { COLORS } from '@/constants';
import styled from 'styled-components';

const Column = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  color: ${COLORS.gray900};
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

export default Column;
