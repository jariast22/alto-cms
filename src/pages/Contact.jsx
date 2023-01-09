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
  padding: 20px;
  display: flex;
  height: 100%;
`;

export default Contact;
