
import { Slider } from "../ui/slider"

const SliderVolumen = ({volume, setVolume, muted}: {volume: number, setVolume: (values: number[]) => void, muted: boolean}) => {
  return (
    <Slider value={muted ? [0] : [volume]} max={1} step={0.01} onValueChange={setVolume}/>
  )
}

export default SliderVolumen