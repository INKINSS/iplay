import { usePlayerStore } from "@/store/playerStore";
import PauseButtonAlbum from "@/icons/PauseButtonAlbum";
import PlayBlack from "@/icons/PlayBlack";

const ButtonPlayerAlbum = ({ albumId }: { albumId: string | number }) => {

    const { isPlaying, currentMusic } = usePlayerStore(state => state);
    const currentPlaylist = isPlaying && currentMusic?.playlist?.id === albumId;
  
    return (
      <figure className="size-16 bg-green-400 rounded-full p-4 hover:scale-105 transition-all cursor-pointer">
        {currentPlaylist ? <PauseButtonAlbum /> : <PlayBlack />}
      </figure>
    );
  };
  

export default ButtonPlayerAlbum