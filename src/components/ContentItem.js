import { useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Image } from "mui-image";
import {
  Divider,
  Button,
  Typography 
} from '@mui/material';
import { Favorite } from "./Favorite";
import './ContentItem.css';

export const ContentItem = ({data, cid}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  //pulling type from path and stripping all forward slashes
  const type = location.pathname.match(/\/.+?\//)[0].replace(/\//g, '');

  const handleRecommend = useCallback(() => navigate(`/recommend/${type}/${params.cid}`, {replace: true}));

  return (
    <div
      type={data.media_type}
      className="item-item">
      <Image 
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        fit="cover"
        height="40vh"
        duration={0}
        className="item-media" />
      <div className="item-content">
        <div className="item-header">
          <h1>{data.name || data.title}</h1>
          <Favorite cid={Number(cid)} type={data.media_type}/>
        </div>
        <p>{data.overview}</p>
        <strong>👀 {data.popularity}</strong>{' '}
        <strong>✨ {data.vote_average}</strong>{' '}
        <strong>🔄 {data.vote_count}</strong>
        <Divider className='item-divider'>
          <Typography variant={"caption"}>
            options
          </Typography>
        </Divider>
        <Button 
          variant="contained" 
          sx={{ mt: 0.5 }}>
          Share
        </Button>
        <Button 
          variant="contained" 
          sx={{ mt: 0.5 }}
          onClick={handleRecommend}>
          Recommend similar
        </Button>
      </div>
    </div>
  )
}