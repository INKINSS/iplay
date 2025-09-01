import PauseGreenSongs from "@/icons/PauseGreenSongs";
import PlayGreenSongs from "@/icons/PlayGreenSongs";
import { usePlayerStore } from "@/store/playerStore";

interface Song {
    id: string | number;
    title: string;
    image?: string;
    artists?: string[];
}


const SongCard = ({song}: {song: Song}) => {
    
    const { isPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state);
    const currentPlaylist = isPlaying && currentMusic?.song?.id === song.id;

    const handleClick = () => {
        setCurrentMusic({
            playlist:{
            id: song.id,
            song,
        }, song, songs: []});
    }
    
  return (
    <a href={`/album/${song.id}`} className="flex-shrink-0 relative gap-2 group w-40 rounded-sm hover:bg-zinc-800 px-2 py-4 cursor-pointer transition-all duration-150 ease-in-out" onClick={handleClick}>
        <figure className="size-[144px]">
            <img className="w-full h-full rounded-sm" src={song.image} alt={song.title} />
            {currentPlaylist ? <PauseGreenSongs /> : <PlayGreenSongs />}
        </figure>
        <div className="flex flex-col">
            <p className="text-zinc-100 text-[1rem] font-medium line-clamp-2 mt-2 leading-5">{song.title}</p>
            <p className="text-zinc-400 text-[.8rem] line-clamp-2 mt-1">{song.artists}</p>
        </div>
    </a>
  )
}

export default SongCard