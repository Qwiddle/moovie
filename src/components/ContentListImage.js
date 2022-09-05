import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ImageList,
ImageListItem,
ImageListItemBar,
IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Favorite } from "./Favorite";

export const ContentListImage = ({content}) => {
  const navigate = useNavigate();
  const handleFollowThrough = useCallback((id, media_type) => navigate(`../${media_type}/${id}`, {replace: true}));

  return (
    <ImageList 
      sx={{ 
        width: '100vw', 
        height: '100%', 
        margin: '0'}} 
      gap={0}>
      {content.results.map((result) => (
        <ImageListItem key={result.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            srcSet={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            alt={result.title}
            loading="lazy"/>
          <ImageListItemBar
            title={result.title || result.name}
            subtitle={`🔥 ${result.popularity}`}
            actionIcon={
              <><IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${result.title}`}
                onClick={() => handleFollowThrough(result.id, result.media_type)}>
                <InfoIcon />
              </IconButton>
              <Favorite cid={result.id} type={result.media_type} /></>
            }/>
        </ImageListItem>
      ))}
    </ImageList>
  )
}