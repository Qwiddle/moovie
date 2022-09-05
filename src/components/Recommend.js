import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "react-query";
import { ContentListImage } from "./ContentListImage";

export const Recommend = () => {
  const params = useParams();

  const { isLoading, data } = useQuery(['recommendation'], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/${params.type}/${params.cid}/recommendations?api_key=${process.env.REACT_APP_API_TMDB}`)
    return await res.json();
  });

  return (
    data ?
    <div className="recommendations">
      <ContentListImage content={data}/>
    </div> : ''
  )
}