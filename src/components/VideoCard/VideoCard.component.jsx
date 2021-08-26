import React from 'react';
import { Link } from "react-router-dom";
import { CardItem, CardImgContainer, CardInfo, CardDate, CardBy, CardDescription } from '../../styles/cards';
import { ImageGeneral, Subtitle } from '../../styles/generals';

const VideoCard = (props) => {
  const { title, videoId, thumb, description, channel, publishedDate, favoriteCard } = props;
  let navRoute;
  if(favoriteCard){
    navRoute = `/favorites/${videoId}`;
  }
  else{
    navRoute =  `/details/${videoId}`;
  }
  return (
    <CardItem className="card" role="gridcell">
      <Link className="cardContainer" to={location => navRoute}>
        <CardImgContainer>
          <ImageGeneral data-testid="video-card-item--img" src={thumb} alt={title} title={title} />
        </CardImgContainer>
        <CardInfo>
          <Subtitle data-testid="video-card-item--title">{title}</Subtitle>
          <CardDate>{publishedDate.slice(0, 10)}</CardDate>
          <CardDescription data-testid="video-card-item--descr">{description}</CardDescription>
          <CardBy>BY <strong>{channel}</strong></CardBy>
        </CardInfo>
      </Link>
    </CardItem>
  );
};
export default VideoCard;
