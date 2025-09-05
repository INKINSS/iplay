import { songs } from '@/lib/data';
import CardMusic from './CardMusic';
import type { Song } from '@/lib/data';

const ViewMusic = () => {


  return (
    <section className='py-10'>
        <h1 className="text-white text-[1.5rem] font-bold">Todas las canciones</h1>
        <div className="flex gap-2 flex-wrap">
            {songs.map((song: Song) => <CardMusic key={song.title} song={song} />)}
        </div>
    </section>
  )
}

export default ViewMusic
