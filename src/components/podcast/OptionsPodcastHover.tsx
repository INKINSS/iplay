import Mute from "@/icons/Mute"
import PlayPodcast from "./PlayPodcast"
import SaveLibraryPodcast from "@/icons/SaveLibraryPodcast"
import MoreOptionsPodcast from "@/icons/MoreOptionsPodcast"
import TooltipItem from "../common/TooltipItem"

const OptionsPodcastHover = ({title}: {title: string}) => {
  return (
    <section className="flex justify-between my-4 px-2">
        <div className="flex gap-2 bg-zinc-800 rounded-full px-4 py-1 items-center text-zinc-300">
            <figure className="size-5 aspect-square flex items-center justify-center">
                <Mute />
            </figure>
            <span className="text-sm">Muestra del...</span>
        </div>
        <div className="flex gap-4 items-center">
            <TooltipItem text="Mas">
                <MoreOptionsPodcast />
            </TooltipItem>
            <TooltipItem text="Añadir a tus episodios">
                <SaveLibraryPodcast />
            </TooltipItem>
            <TooltipItem text={`Reproducir ${title}`} className="cursor-pointer">
                <PlayPodcast />
            </TooltipItem>
        </div>
    </section>
  )
}

export default OptionsPodcastHover