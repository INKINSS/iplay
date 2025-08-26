import { getAlbums } from '@/utils/getAlbums'
import SongCard from './SongCard'

const PublicSong = () => {
  return (
    <div>
        <div className="flex flex-col mt-5">
        <a href="#" className="text-white font-bold text-[1.5rem] hover:underline">Albumes más escuchados</a>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {getAlbums().map((album) => (
                <SongCard key={album.id} song={album} />
            ))}
        </div>
    </div>
  )
}

export default PublicSong