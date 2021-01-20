import React from 'react';
import { Row, Col } from 'antd';
import {
  DashboardWrapper,
  ContentWrapper,
  CardWrapper,
  AlbumWrapper,
  DashboardHeader,
} from './styled';
import AlbumPreview from 'Modules/dashboard/components/AlbumPreview/index';
import NumberCard from '../components/DashboardCard/numberCard';
import ProgressCard from '../components/DashboardCard/progressCard';
import ModelCard from '../components/DashboardCard/modelCard';

const LabelList: Array<string> = ['label1', 'label2', 'label3'];

const DashboardCard: React.FC = () => {
  return (
    <CardWrapper>
      <Row justify="space-around" align="middle">
        <Col md={4}>
          <NumberCard cardName={'Photos'} largeNumber={123000} todayNumber={123000} />
        </Col>
        <Col md={4}>
          <NumberCard cardName={'Videos'} largeNumber={123000} todayNumber={123000} />
        </Col>
        <Col md={4}>
          <ProgressCard
            cardName={'Task'}
            progress={75}
            doneNumber={100}
            totalNumber={1000}
          />
        </Col>
        <Col md={4}>
          <ModelCard cardName={'Model'} model={'resNet'} largeNumber={800} />
        </Col>
      </Row>
    </CardWrapper>
  );
};

const OverviewAlbum: React.FC = () => {
  return (
    <Row justify="space-around" align="middle">
      <Col md={5}>
        <AlbumPreview
          src="assets/images/test.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
      <Col md={5}>
        <AlbumPreview
          src="assets/images/test.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
      <Col md={5}>
        <AlbumPreview
          src="assets/images/test.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
      <Col md={5}>
        <AlbumPreview
          src="assets/images/test.jpg"
          albumName="album name"
          albumLength={1}
          label={LabelList}
        />
      </Col>
    </Row>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <DashboardWrapper>
      <ContentWrapper>
        <DashboardHeader>Dashboard</DashboardHeader>
        <DashboardCard />

        <AlbumWrapper>
          <h3>Overview Album</h3>
          <OverviewAlbum />
        </AlbumWrapper>
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default DashboardPage;
