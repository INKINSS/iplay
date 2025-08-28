import { useState } from "react"

const Letter = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

  return (
    <svg data-encore-id="icon" onClick={handleClick} role="img" aria-hidden="true" className={`e-91000-icon e-91000-baseline w-full transition-all duration-100 hover:scale-105 ${isActive ? 'fill-green-400' : 'fill-zinc-400'}` } viewBox="0 0 16 16"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797M10.5 8.118l-2.619-2.62L4.74 9.075 2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045z"></path></svg>
  )
}

export default Letter