import PlayGreenMain from "@/icons/PlayGreenMain";

interface Song {
    id: string | number;
    title: string;
    image?: string;
    artists?: string[];
}


const SongCard = ({song}: {song: Song}) => {
  return (
    <a href={`/album/${song.id}`} className="flex-shrink-0 gap-2 relative group w-40 rounded-sm mt-1 hover:bg-zinc-800 px-2 py-4 cursor-pointer transition-all duration-150 ease-in-out">
        <figure className="size-[144px]">
            <img className="w-full h-full rounded-sm" src={song.image} alt={song.title} />
            <PlayGreenMain />
        </figure>
        <div className="flex flex-col">
            <p className="text-zinc-100 text-[1rem] line-clamp-2 mt-2 leading-5">{song.title}</p>
            <p className="text-zinc-400 text-[.6rem] line-clamp-2 mt-1">{song.artists}</p>
        </div>
    </a>
  )
}

export default SongCard