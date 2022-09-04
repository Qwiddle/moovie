import { IconButton } from "@mui/material";
import { red, blue } from '@mui/material/colors';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useOutletContext } from "react-router-dom";

export const Favorite = ({cid, type}) => {
  const [favorites, setFavorites] = useOutletContext();

  const handleFavorite = () => {
    if(!favorites.find(f => f.cid == cid && f.type == type)) {
      setFavorites(prev => [{cid, type}, ...prev]);
    } else {
      setFavorites(prev => prev.filter(p => !(type == p.type && cid == p.cid)));
    }
  }

  const checkIfFavorited = () => {
    if(!favorites.find(f => f.cid == cid && f.type == type)) {
      return { color: blue[100] }
    } else {
      return { color: red[800] }
    }
  }

  return (
    <IconButton 
      aria-label="favorite" 
      className="favorite" 
      onClick={handleFavorite}>
      <FavoriteIcon sx={checkIfFavorited} />
    </IconButton>
  )
}