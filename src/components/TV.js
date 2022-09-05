import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ContentItem } from "./ContentItem";
import './css/ContentItem.css';

export const TV = () => {
  const params = useParams();

  const { isLoading, data } = useQuery(['movie'], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params.cid}?api_key=${process.env.REACT_APP_API_TMDB}`)
    const json = await res.json();

    return json;
  }, { 
    enabled: !!params.cid 
  });

  return (
    isLoading ? 
    'Loading...' :
    <ContentItem cid={params.cid} data={data} />
  )
}