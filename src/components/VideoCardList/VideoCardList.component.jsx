import React from 'react';
import { useHistory } from "react-router-dom";

import {
  VideoListedItem,
  VideoListedItemButton,
  VideoListedImgCont,
  VideoCardImg,
  VideoListedCardInfo,
  VideoListedCardInfoTitle,
  VideoCardChannel} from '../StyledComponents/StyledComponents.component';


const VideoCardList = (props) => {
    const { title, videoId, thumb, channel } = props;
    const history = useHistory();


    function selectVideo(e, data){
      e.preventDefault();
      history.push(`/details/${data}`);
    }

    return (
      <VideoListedItem className="card">
        <VideoListedItemButton onClick={((e) => selectVideo(e, videoId))}>
          <VideoListedImgCont>
            <VideoCardImg  src={thumb} alt={title} title={title} />
          </VideoListedImgCont>
          <VideoListedCardInfo>
            <VideoListedCardInfoTitle>{title}</VideoListedCardInfoTitle>
            <VideoCardChannel>BY <strong>{channel}</strong></VideoCardChannel>
          </VideoListedCardInfo>
        </VideoListedItemButton>
      </VideoListedItem>
    );
  };
  export default VideoCardList;
