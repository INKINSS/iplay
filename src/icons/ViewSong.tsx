import { useState } from "react"

const ViewSong = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

  return (
    <svg data-encore-id="icon" onClick={handleClick} role="img" aria-hidden="true" className={`e-91000-icon e-91000-baseline w-full transition-all duration-100 hover:scale-105 ${isActive ? 'fill-green-400' : 'fill-zinc-400'}` } viewBox="0 0 16 16"><path d="M11.196 8 6 5v6z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25z"></path></svg>
  )
}

export default ViewSong