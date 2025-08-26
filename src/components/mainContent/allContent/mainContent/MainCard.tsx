import PlayGreenMain from "@/icons/PlayGreenMain";

interface Playlist {
    id: string;
    title: string;
    cover?: string;
}


const MainCard = ({playlist}: {playlist: Playlist}) => {
  return (
    <article className="flex-shrink-0 gap-2 overflow-hidden relative group w-40 rounded-sm mt-1 hover:bg-zinc-800 px-2 py-4 cursor-pointer transition-all duration-150 ease-in-out">
        <figure className="size-[144px]">
            <img className="w-full h-full rounded-sm" src={playlist.cover} alt={playlist.title} />
            <PlayGreenMain />
        </figure>
        <p className="text-zinc-400 text-sm line-clamp-2 mt-2">{playlist.title}</p>
    </article>
  )
}

export default MainCard