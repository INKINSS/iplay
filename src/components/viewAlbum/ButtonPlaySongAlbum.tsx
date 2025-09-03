
import { usePlayerStore } from "@/store/playerStore";
import { type Song } from "@/lib/data";

const ButtonPlaySongAlbum = ({index, albumId, song}: {index: number, albumId: string | number, song: Song}) => {

        const { setCurrentMusic } = usePlayerStore(state => state);
    
        const handleClick = () => {
            setCurrentMusic({
                playlist:{
                id: albumId,
                song: index,
            }, song, songs: []});
        }
  return (
    <button onClick={handleClick}  className="text-zinc-400 text-[1rem] font-medium opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-20">{index + 1}</button>
  )
}

export default ButtonPlaySongAlbum