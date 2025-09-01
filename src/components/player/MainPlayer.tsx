import ConnectSong from "@/icons/ConnectSong"
import FullScreenSong from "@/icons/FullScreenSong"
import Letter from "@/icons/Letter"
import LineSong from "@/icons/LineSong"
import MiniReproductor from "@/icons/MiniReproductor"
import NextSong from "@/icons/NextSong"
import PlayBlack from "@/icons/PlayBlack"
import PreviousSong from "@/icons/PreviousSong"
import Random from "@/icons/Random"
import RepeatSong from "@/icons/RepeatSong"
import ViewSong from "@/icons/ViewSong"
import Volumen from "@/icons/Volumen"
import { Slider } from "../ui/slider"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { useRef, useEffect } from "react"
import Pause from "@/icons/Pause"
import { usePlayerStore } from "@/store/playerStore"

const MainPlayer = () => {

    const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore();
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
    }, [isPlaying])

    useEffect(() => {
        const { song, playlist } = currentMusic;
        if(song) {
            const src = `/music/0${playlist.id}/01.mp3`;
            console.log(src);
            audioRef.current!.src = src;
            audioRef.current?.play();
            console.log(currentMusic)
        }
    }, [currentMusic])
 

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    }

  return (
    <section className="flex justify-between items-center h-full px-6">
        <div className="flex flex-1 items-center gap-3">
            {currentMusic.song && <figure className="size-14">
                <img className="size-full rounded-lg" src={currentMusic.song.image} alt={currentMusic.song.title} />
            </figure>}
            <div className="flex flex-col leading-4">
                <p className="text-white font-medium">{currentMusic.song?.title}</p>
                <span className="text-zinc-400 font-light text-sm">{currentMusic.song?.artists?.join(', ')}</span>
            </div>
        </div>
        <div className="flex flex-col w-[45%] items-center gap-3">
            <div className="flex gap-6 items-center">
                <Tooltip>
                    <TooltipTrigger className="size-4 cursor-pointer">
                        <Random />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Activar aleatorio</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className="size-4 cursor-pointer">
                        <PreviousSong />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Anterior</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className="size-8 rounded-full bg-white p-2 hover:bg-zinc-200 hover:scale-105" onClick={handleClick}>
                        {isPlaying ? <Pause /> : <PlayBlack />}
                        <audio ref={audioRef}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{isPlaying ? 'Pausar' : 'Reproducir'}</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className="size-4 cursor-pointer">
                        <NextSong />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Siguiente</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className="size-4 cursor-pointer">
                        <RepeatSong />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Activar repetir</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="w-full">
                <Slider defaultValue={[10]} max={100} step={1} />
            </div>
        </div>
        <div className="flex gap-3 flex-1 justify-end">
            <Tooltip>
                <TooltipTrigger className="size-4 cursor-pointer">
                    <ViewSong />
                </TooltipTrigger>
                <TooltipContent>
                    <p>vista sonando</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger className="size-4 cursor-pointer">
                    <Letter />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Letra</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger className="size-4 cursor-pointer">
                    <LineSong />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Linea</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger className="size-4 cursor-pointer">
                    <ConnectSong />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Conectar a un dispositivo</p>
                </TooltipContent>
            </Tooltip>
            <div className="flex w-[30%] gap-3">
                <Tooltip>
                    <TooltipTrigger className="size-4 cursor-pointer">
                        <Volumen />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Silenciar</p>
                    </TooltipContent>
                </Tooltip>
                <Slider className="w-full" defaultValue={[100]} max={100} step={1} />
            </div>
            <Tooltip>
                <TooltipTrigger className="size-4 cursor-pointer">
                    <MiniReproductor />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Abrir el Minireproductor</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger className="size-4 cursor-pointer">
                    <FullScreenSong />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Abrir la pantalla completa</p>
                </TooltipContent>
            </Tooltip>
        </div>
    </section>
  )
}

export default MainPlayer