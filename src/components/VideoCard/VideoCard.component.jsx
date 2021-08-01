import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const VideoCardItem = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  @media only screen and (min-width: 48em) {
    flex-basis: calc(33.33333333% - 20px);
    max-width: calc(33.33333333% - 20px);
  }
`;
export const VideoCardItemButton = styled.a`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  border: 0;
  cursor: pointer;
`;
export const VideoCardImgCont = styled.div`
  width: 100%;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  height: 180px;
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
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.6px;
  padding-bottom: 10px;
  flex-basis: 50%;
  max-width: 50%;
`;
export const VideoCardInfoText = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.4px;
`;
export const VideoCardinfoDate = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  flex-basis: 50%;
  max-width: 50%;
  text-align: right;
`;
export const VideoCardChannel = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  color: black;
  font-size: 12px;
  line-height: 14px;
  padding: 20px 0;
  text-align: left;
  flex-basis: 100%;
  max-width: 100%
`;
const VideoCard = (props) => {
  const { title, videoId, thumb, description, channel, publishedDate } = props;
  const history = useHistory();

  const loadPage = (videoId) => {
    history.push(`/details/${videoId}`);
  }

  return (
    <VideoCardItem data-testid="video-card-item">
      <VideoCardItemButton >
        <VideoCardImgCont>
          <VideoCardImg data-testid="video-card-item--img" src={thumb} alt={title} title={title} />
        </VideoCardImgCont>
        <VideoCardInfo>
          <VideoCardInfoTitle data-testid="video-card-item--title">{title}</VideoCardInfoTitle>
          <VideoCardinfoDate>{publishedDate.slice(0, 10)}</VideoCardinfoDate>
          <VideoCardInfoText data-testid="video-card-item--descr">{description}</VideoCardInfoText>
          <VideoCardChannel>BY <strong>{channel}</strong></VideoCardChannel>
        </VideoCardInfo>
      </VideoCardItemButton>
    </VideoCardItem>
  );
};
export default VideoCard;
