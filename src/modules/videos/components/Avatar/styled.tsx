import { Avatar } from 'antd';
import styled from 'styled-components';
import { AvatarWrapperProps } from './types';

export const AvatarWrapper = styled(Avatar)<AvatarWrapperProps>`
  border-radius: 50%;
  ${(props) =>
    props.selected &&
    `
    border: 3px solid #0BB5C2;
  `}
`;
