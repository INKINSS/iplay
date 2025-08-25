import { favoriteHeader } from "@/lib/data";
import FavoriteCard from "./FavoriteCard";


const HeaderContent = () => {
  return (
    <div className="flex gap-4">
        <div className="flex gap-4">
      {favoriteHeader.map((playlist) => (
        <FavoriteCard key={playlist.id} playlist={playlist} />
      ))}
        </div>
    </div>
  );
};

export default HeaderContent;
