import React from 'react';
import styled from 'styled-components';

export const VideoCardItem = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (min-width: 48em) {
    flex-basis: calc(33.33333333% - 20px);
    max-width: calc(33.33333333% - 20px);
  }
`;
export const VideoCardImgCont = styled.div`
  width: 100%;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  height: 150px;
  display: block;
`;
export const VideoCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`;
export const VideoCardInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 150px);
  text-align: left;
`;
export const VideoCardInfoTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.6px;
  padding-bottom: 10px;
  width: 100%;
`;
export const VideoCardInfoText = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.4px;
`;
const VideoCard = (props) => {
  const { title, thumb, description } = props;
  return (
    <VideoCardItem>
      <VideoCardImgCont>
        <VideoCardImg src={thumb.url} alt={title} title={title} />
      </VideoCardImgCont>

      <VideoCardInfo>
        <VideoCardInfoTitle>{title}</VideoCardInfoTitle>
        <VideoCardInfoText>{description}</VideoCardInfoText>
      </VideoCardInfo>
    </VideoCardItem>
  );
};
export default VideoCard;
