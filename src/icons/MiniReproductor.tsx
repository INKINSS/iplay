import { useState } from "react"

const MiniReproductor = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

  return (
    <svg data-encore-id="icon" onClick={handleClick} role="img" aria-hidden="true" className={`e-91000-icon e-91000-baseline w-full transition-all duration-100 hover:scale-105 ${isActive ? 'fill-green-400' : 'fill-zinc-400'}`} viewBox="0 0 16 16"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16z"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75z"></path></svg>
  )
}

export default MiniReproductor