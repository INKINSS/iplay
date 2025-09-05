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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { useRef, useEffect, useState } from "react"
import Pause from "@/icons/Pause"
import { usePlayerStore } from "@/store/playerStore"
import SliderMusic from "./SliderMusic"
import SliderVolumen from "./SliderVolumen"
import Mute from "@/icons/Mute"

const MainPlayer = () => {

    const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        audioRef.current?.addEventListener('timeupdate', () => {
            setCurrentTime(Math.floor(audioRef.current!.currentTime));
        });
    }, []);

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
    }, [isPlaying])

    useEffect(() => {
        const { song, playlist } = currentMusic;
        if (song) {
            const trackNumber = String(playlist.song + 1).padStart(2, "0");
            const src = `/music/0${playlist.id}/${trackNumber}.mp3`;
            const audio = audioRef.current;
            if (audio) {
                audio.src = src;
                audio.play();
            }
        }
    }, [currentMusic]);
    
 

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    }

    const handleSliderChange = (value: number) => {
        if (audioRef.current) {
          audioRef.current.currentTime = value
          setCurrentTime(value)
        }
      }

      const handleVolumeChange = (values: number[]) => {
        if(audioRef.current){
            audioRef.current.volume = values[0];
            setVolume(values[0]);
        }
      }

      const handleMute = () => {
        if(audioRef.current){
            audioRef.current.muted = !muted;
            setMuted(!muted);
        }
      }
  return (
    <section className="flex justify-between items-center h-full px-6">
        <div className="flex flex-1 items-center gap-3">
            {currentMusic.song && <figure className="size-14">
                <img className="size-full rounded-lg" src={currentMusic.song.image} alt={currentMusic.song.title} />
            </figure>}
            <div className="flex flex-col leading-4">
                <p className="text-white font-medium hover:underline cursor-pointer">{currentMusic.song?.title}</p>
                <span className="text-zinc-400 font-light text-sm hover:underline cursor-pointer">{currentMusic.song?.artists?.join(', ')}</span>
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
                        <audio ref={audioRef} onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}/>
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
                <SliderMusic value={currentTime} max={duration} onChange={handleSliderChange}/>
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
                    <TooltipTrigger className="size-4 cursor-pointer" onClick={handleMute}>
                        {muted ? <Mute /> : <Volumen />}
                    </TooltipTrigger>
                    <TooltipContent>
                        {muted ? <p>Activar sonido</p> : <p>Silenciar</p>}
                    </TooltipContent>
                </Tooltip>
                <SliderVolumen volume={volume} setVolume={handleVolumeChange} muted={muted} />
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