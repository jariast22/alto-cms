import styled from 'styled-components';
import Label from '@/atoms/Label';
import { COLORS } from '@/constants';

const AboutUs = () => (
  <Wrapper>
    <Label size="1.5">About Us</Label>
    <Text>
      Morbi ac massa et turpis iaculis ornare id et justo. Mauris nec mauris
      est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Etiam cursus sed erat et ultricies.
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${COLORS.gray300};
  flex: 1.5;
  padding: 20px;
`;

const Text = styled.p`
  line-height: 1.5;
`;

export default AboutUs;
