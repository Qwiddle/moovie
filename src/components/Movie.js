import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ContentItem } from "./ContentItem";

export const Movie = () => {
  const params = useParams();

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
    <ContentItem cid={params.cid} data={data}/>
  )
}