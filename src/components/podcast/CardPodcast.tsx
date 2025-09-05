import OptionsPodcastHover from "./OptionsPodcastHover"
import Video from '../../icons/Video'

interface Props {
    title: string,
    cover: string,
    category: string,
    date: string,
    duration: string,
    description: string,
}

const CardPodcast = ({title, cover, category, date, duration, description}: Props) => {
  return (
    <article className="w-[45%] px-3 py-5 rounded-lg flex flex-col bg-indigo-400/10 border-gray-700 hover:bg-indigo-400/20 transition-colors duration-150 ease-in-out cursor-pointer group overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <div className="mb-4">
                <h2 className="font-bold text-2xl text-white hover:underline cursor-pointer leading-tight mb-2 min-h-[3.5rem]">
                    {title}
                </h2>
                <div className="flex items-center gap-2 text-zinc-300">
                    <Video /> Video •
                    <span className="text-white cursor-pointer hover:underline">{category}</span>
                </div>
            </div>
            
            <figure className="w-full mb-4">
                <img className="w-full rounded-sm aspect-video object-cover hover:scale-105 transition-transform duration-150 ease-in-out cursor-pointer" src={cover} alt={title} />
            </figure>
            
            <div className="mb-3">
                <span className="text-white font-semibold mr-2">{date}</span>
                <span className="text-white font-semibold">• {duration}</span>
            </div>
            
            <p className="line-clamp-3 text-zinc-300 text-sm leading-relaxed">
                {description}
            </p>
        </div>
        
        <div className="translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <OptionsPodcastHover title={title} />
        </div>
    </article>
  )
}

export default CardPodcast