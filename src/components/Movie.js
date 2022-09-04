import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Card,
  Divider,
  CardContent,
  CardMedia,
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
      <Card className='movie-item'>
        <CardMedia
          className='movie-media'
          image={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        />
        <CardContent className='movie-content'>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {data.title}
            <Favorite cid={params.cid} type="movie" />
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {data.overview}
          </Typography>
          <Divider className='movie-divider' light>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              options
            </Typography>
          </Divider>
          <Button variant="contained" sx={{ mx: 0.5, mt: 0.5 }}>Share</Button>
          <Button variant="contained" sx={{ mx: 0.5, mt: 0.5 }}>Recommend similar</Button>
        </CardContent>
      </Card>
  )
}