import { Slider } from "@/components/ui/slider"

interface SliderMusicProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

const SliderMusic = ({ value, max, onChange }: SliderMusicProps) => {
  return (
    <Slider 
      value={[value]} 
      max={max} 
      step={1} 
      onValueChange={(values) => onChange(values[0])} 
    />
  )
}

export default SliderMusic