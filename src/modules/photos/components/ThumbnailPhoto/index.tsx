import React, { useState } from 'react';
import SelectBadgeIcon from '../SelectBadgeIcon';
import {
  ThumbnailPhotoDisplayStyled,
  ThumbnailPhotoWrapperStyled,
  ThumbnailSelectIconWrapperLayoutStyled,
} from './styled';
import { Props } from './types';

const ThumbnailPhoto: React.FC<Props> = (props) => {
  const { selected, src, onClick } = props;
  const [hover, setHover] = useState<boolean>(selected);

  const onHover = (isHover: boolean) => {
    setHover(isHover);
  };

  const onSelect = (s) => {
    props.onSelect && props.onSelect(s);
  };

  return (
    <ThumbnailPhotoWrapperStyled
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}>
      <ThumbnailSelectIconWrapperLayoutStyled>
        <SelectBadgeIcon hover={hover} selected={selected} onSelect={onSelect} />
      </ThumbnailSelectIconWrapperLayoutStyled>
      <ThumbnailPhotoDisplayStyled onClick={onClick} src={src} />
    </ThumbnailPhotoWrapperStyled>
  );
};

export default ThumbnailPhoto;
