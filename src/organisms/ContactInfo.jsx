import styled from 'styled-components';
import Label from '@/atoms/Label';

const ContactInfo = () => (
  <Wrapper>
    <Label size="1.5">Contact Us</Label>
    <p>123 Street, Rochester, New Hampshire.</p>
    <h2>123-12312-4</h2>
    <h2>123-12312-4</h2>
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export default ContactInfo;
