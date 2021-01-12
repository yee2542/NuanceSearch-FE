import styled, { css } from 'styled-components';
import { Layout } from 'antd';
const { Sider } = Layout;

export const ContentWrapper = styled.div`
  margin: 10% 5% 5% 5%;
`;

export const CanvasWrapper = styled.div`
  .ant-layout-header {
    background-color: white;
    position: fixed;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .ant-layout-content {
    height: 100vh;
    background-color: white;
    overflow-y: scroll;
  }
`;

export const SiderWrapper = styled(Sider)`
  background-color: #4425a7;
  width: 294px;
  padding: 2%;
  overflow: hidden;
  z-index: 1000;
`;

export const MenuWrapper = styled.div`
  margin-top: 30%;
  width: 100%;
`;

export const MenuItem = styled.div<{ isSelecting: boolean }>`
  width: 100%;
  cursor: pointer;
  color: white;

  p:hover {
    padding: 1em 1em 1em 1em;
    border-radius: 0.5em;
    background-color: #48cdd8;
  }

  p {
    padding: 1em 1em 1em 1em;
    border-radius: 0.5em;
    background-color: transparent;
  }

  ${(props) =>
    props.isSelecting &&
    css`
      p {
        padding: 1em 1em 1em 1em;
        border-radius: 0.5em;
        background-color: #48cdd8;
      }

      p:hover {
        padding: 1em 1em 1em 1em;
        border-radius: 0.5em;
        background-color: red;
      }
    `}
`;

export const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
