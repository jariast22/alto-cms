import { COLORS } from '@/constants';
import styled from 'styled-components';

const Column = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  color: ${COLORS.gray900};
  flex: 1;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export default Column;
