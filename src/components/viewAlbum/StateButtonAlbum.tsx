import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import ButtonPlayerAlbum from "./ButtonPlayerAlbum"
import { usePlayerStore } from "@/store/playerStore"

const StateButtonAlbum = ({ albumId }: { albumId: string | number }) => {

    const { isPlaying, currentMusic, setIsPlaying, setCurrentMusic } = usePlayerStore();
    const { playlist } = currentMusic;
    const currentAlbum = playlist && playlist.id === albumId;
    const currentPlaylist = isPlaying && currentAlbum;

    const handlePlay = () => {
        if (currentPlaylist) {
          setIsPlaying(false);
          return;
        }
        fetch(`/api/get-info-playlist?id=${albumId}`)
        .then(res => res.json())
        .then(data => {
            const { playlist, songs } = data;
            setIsPlaying(true);
            setCurrentMusic({songs, playlist, song: songs[0]})
        })
    };
      
  
    return (
      <Tooltip>
        <TooltipTrigger onClick={handlePlay}>
          <ButtonPlayerAlbum albumId={albumId} />
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </TooltipContent>
      </Tooltip>
    );
  };
  
export default StateButtonAlbum