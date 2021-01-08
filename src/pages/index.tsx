import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import IconSelector from 'src/common/utils/icon-selector';
import HomeLayout from 'src/common/components/Layouts/Home';
import { APP_FEATURE_CONSTANT } from 'src/common/models/featureCard/constant';

const Icon = styled.div`
  font-size: 40px;
`;

const gridStyle: CSSProperties = {
  textAlign: 'center',
};

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-image: url('https://pbs.twimg.com/media/ElVxJ8OWMAAnew5.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Heading = styled.div`
  font-size: 5em;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0em;
`;

const FeatureCard: React.FC = () => {
  return (
    <>
      {APP_FEATURE_CONSTANT.map(({ key, icon, label, description }) => (
        <Col xs={20} md={5} lg={7} key={key}>
          <Card style={gridStyle}>
            <Icon>
              <IconSelector type={icon} />
            </Icon>
            <br />
            <h2>{label}</h2>
            <p>{description}</p>
          </Card>
        </Col>
      ))}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <HeaderWrapper>
        <Heading>Heading</Heading>
        <p>Lorem ipsum..</p>
        <Button>Explore</Button>
      </HeaderWrapper>
      <Row gutter={[0, 24]} justify="space-around" style={{ marginTop: '20px' }}>
        <Col span={21}>
          <Row justify="center" gutter={[24, 24]}>
            <FeatureCard />
          </Row>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default Home;
