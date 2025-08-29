import { useState } from "react"

const LineSong = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

  return (
    <svg data-encore-id="icon" onClick={handleClick} role="img" aria-hidden="true" className={`e-91000-icon e-91000-baseline w-full transition-all duration-100 hover:scale-105 ${isActive ? 'fill-green-400' : 'fill-zinc-400'}`} viewBox="0 0 16 16"><path d="M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></path></svg>
  )
}

export default LineSong