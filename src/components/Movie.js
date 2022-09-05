import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Image } from "mui-image";
import {
  Divider,
  Button,
  Typography 
} from '@mui/material';
import { Favorite } from "./Favorite";
import './Movie.css';

export const Movie = () => {
  let params = useParams();

  const { isLoading, data } = useQuery(['movie'], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.cid}?api_key=${process.env.REACT_APP_API_TMDB}`)
    const json = await res.json();

    return json;
  }, { 
    enabled: !!params.cid 
  });

  return (
    isLoading ?
      'Loading...' :
      <div 
        type="movie" 
        className="movie-item">
        <Image 
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          fit="cover"
          height="40vh"
          duration={0}
          className="movie-media"
        />
        <div className="movie-content">
          <div className="movie-header">
            <h1>{data.title}</h1>
            <Favorite cid={Number(params.cid)} type="movie"/>
          </div>
          <p>{data.overview}</p>
          <strong>👀 {data.popularity}</strong>{' '}
          <strong>✨ {data.vote_average}</strong>{' '}
          <strong>🔄 {data.vote_count}</strong>
          <Divider className='movie-divider' light>
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
            sx={{ mt: 0.5 }}>
            Recommend similar
          </Button>
        </div>
      </div>
  )
}