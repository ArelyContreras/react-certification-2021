import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { AppContext } from "../../providers/AppProvider";
import { CardItemListed, CardImgContainerListed, CardInfoListed, CardBySmall} from  '../../styles/cards';
import { ImageGeneral, SmallerSubtitle } from '../../styles/generals';

const VideoCardList = (props) => {
    const { title, idVid, thumb, channel, favoriteCard } = props;
    const { setVideoId } = useContext(AppContext);

    let navRoute;
    if(favoriteCard){
      navRoute = `/favorites/${idVid}`;
    }
    else{
      navRoute =  `/details/${idVid}`;
    }
    function selectVideo(e, data){
      setVideoId(data);
    }

    return (
      <CardItemListed className="card">
        {/* <CardContainerTopCenter onClick={((e) => selectVideo(e, idVid))}> */}
        <Link className="cardContainerTopCenter" to={location => navRoute} onClick={((e) => selectVideo(e, idVid))}>
          <CardImgContainerListed>
            <ImageGeneral  src={thumb} alt={title} title={title} />
          </CardImgContainerListed>
          <CardInfoListed>
            <SmallerSubtitle>{title}</SmallerSubtitle>
            <CardBySmall>{channel}</CardBySmall>
          </CardInfoListed>
          </Link>
        {/* </CardContainerTopCenter> */}
      </CardItemListed>
    );
  };
  export default VideoCardList;
