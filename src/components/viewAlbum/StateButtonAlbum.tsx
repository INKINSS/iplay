import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import ButtonPlayerAlbum from "./ButtonPlayerAlbum"
import { usePlayerStore } from "@/store/playerStore"

const StateButtonAlbum = ({ albumId }: { albumId: string | number }) => {
    const { isPlaying, currentMusic } = usePlayerStore();
    const currentAlbum = currentMusic?.playlist?.id === albumId;
    const currentPlaylist = isPlaying && currentAlbum;
  
    const handlePlay = () => {
      if (currentPlaylist) {
        usePlayerStore.setState({ isPlaying: false });
      } else {
        usePlayerStore.setState({
          isPlaying: true,
          currentMusic: {
            playlist: { id: albumId },
            song: currentMusic?.song ?? null,
            songs: []
          }
        });
      }
    };
  
    return (
      <Tooltip>
        <TooltipTrigger onClick={handlePlay}>
          <ButtonPlayerAlbum albumId={albumId} />
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          {currentPlaylist ? "Pausar" : "Reproducir"}
        </TooltipContent>
      </Tooltip>
    );
  };
  
export default StateButtonAlbum