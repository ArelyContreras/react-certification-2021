import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from "../../providers/AppProvider";
import {
  CardItemListed,
  CardContainerTopCenter,
  CardImgContainerListed,
  ImageGeneral,
  CardInfoListed,
  SmallerSubtitle,
  CardBySmall} from '../StyledComponents/StyledComponents.component';


const VideoCardList = (props) => {
    const { title, idVid, thumb, channel } = props;
    const { setVideoId } = useContext(AppContext);
    const history = useHistory();

    function selectVideo(e, data){
      e.preventDefault();
      setVideoId(data);
        history.push(`/details/${data}`);
    }

    return (
      <CardItemListed className="card">
        <CardContainerTopCenter onClick={((e) => selectVideo(e, idVid))}>
          <CardImgContainerListed>
            <ImageGeneral  src={thumb} alt={title} title={title} />
          </CardImgContainerListed>
          <CardInfoListed>
            <SmallerSubtitle>{title}</SmallerSubtitle>
            <CardBySmall>{channel}</CardBySmall>
          </CardInfoListed>
        </CardContainerTopCenter>
      </CardItemListed>
    );
  };
  export default VideoCardList;
