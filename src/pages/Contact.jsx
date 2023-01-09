import AboutUs from '@/organisms/AboutUs';
import ContactInfo from '@/organisms/ContactInfo';
import styled from 'styled-components';

const Contact = () => (
  <Wrapper>
    <ContactInfo />
    <AboutUs />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
`;

export default Contact;
