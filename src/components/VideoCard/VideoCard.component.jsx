import React from 'react';
import { useHistory } from "react-router-dom";
import {
  VideoCardItem,
  VideoCardItemButton,
  VideoCardImgCont,
  VideoCardImg,
  VideoCardInfo,
  VideoCardInfoTitle,
  VideoCardInfoText,
  VideoCardinfoDate,
  VideoCardChannel} from '../../components/StyledComponents/StyledComponents.component';


const VideoCard = (props) => {
  const { title, videoId, thumb, description, channel, publishedDate } = props;
  const history = useHistory();

  function selectVideo(e, data){
    e.preventDefault();
    history.push(`/details/${data}`);
	}

  return (
    <VideoCardItem role="gridcell">
      <VideoCardItemButton onClick={((e) => selectVideo(e, videoId))}>
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
