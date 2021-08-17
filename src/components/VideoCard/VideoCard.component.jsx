import React from 'react';
import { useHistory } from "react-router-dom";
import {
  CardItem,
  CardContainer,
  CardImgContainer,
  ImageGeneral,
  CardInfo,
  Subtitle,
  CardDate,
  CardBy} from '../../components/StyledComponents/StyledComponents.component';


const VideoCard = (props) => {
  const { title, videoId, thumb, description, channel, publishedDate } = props;
  const history = useHistory();

  function selectVideo(e, data){
    e.preventDefault();
    history.push(`/details/${data}`);
	}

  return (
    <CardItem className="card" role="gridcell">
      <CardContainer onClick={((e) => selectVideo(e, videoId))}>
        <CardImgContainer>
          <ImageGeneral data-testid="video-card-item--img" src={thumb} alt={title} title={title} />
        </CardImgContainer>
        <CardInfo>
          <Subtitle data-testid="video-card-item--title">{title}</Subtitle>
          <CardDate>{publishedDate.slice(0, 10)}</CardDate>
          <p data-testid="video-card-item--descr">{description}</p>
          <CardBy>BY <strong>{channel}</strong></CardBy>
        </CardInfo>
      </CardContainer>
    </CardItem>
  );
};
export default VideoCard;
