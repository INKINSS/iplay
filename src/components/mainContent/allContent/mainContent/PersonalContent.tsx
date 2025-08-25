import { contentCommunity } from "@/lib/data"
import MainCard from "./MainCard"


const PersonalContent = () => {
  return (
    <div>
        <div className="flex flex-col mt-5">
        <span className="text-zinc-300 font-extralight text-xs">Hecho para</span>
        <a href="#" className="text-white font-bold text-[1.5rem] hover:underline">La comunidad del Desarrollo</a>
        </div>
        <div className="flex gap-2">
            {contentCommunity.map((playlist) => (
                <MainCard key={playlist.id} playlist={playlist} />
            ))}
        </div>
    </div>
  )
}

export default PersonalContent