import Column from '@/molecules/Column';
import styled from 'styled-components';
import FeaturedBlog from './FeaturedBlog';

const MainContent = () => (
  <Wrapper>
    <Column>
      <p>
        Praesent pellentesque libero ac convallis fermentum. Phasellus id
        pellentesque ex. Fusce vehicula auctor iaculis. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vivamus congue vel nulla eu vestibulum. Morbi velit ante, faucibus ac
        dolor eu, hendrerit bibendum magna. Morbi ac massa et turpis iaculis
        ornare id et justo. Mauris nec mauris est. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Etiam cursus
        sed erat et ultricies. Etiam vel efficitur velit, ac convallis dui.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In augue justo, vehicula ut hendrerit quis, vehicula
        vel diam. Proin at ultrices libero, nec tincidunt est. Sed porta ex sit
        amet vulputate tristique.
      </p>
    </Column>
    <Column>
      <FeaturedBlog
        imageUrl="https://res.cloudinary.com/djxvv0rbv/image/upload/v1673188688/cld-sample-4.jpg"
        altText="alt"
        summary="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In augue justo, vehicula ut hendrerit quis, vehicula
        vel diam. Proin at ultrices libero, nec tincidunt est. Sed porta ex sit
        amet vulputate tristique."
      ></FeaturedBlog>
    </Column>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0;
`;

export default MainContent;
